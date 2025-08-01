import { SearchResponse } from '@/app/api/search/route';

export interface SearchOptions {
  limit?: number;
  offset?: number;
}

export interface SearchError {
  message: string;
  code?: string;
}

class SearchService {
  private baseUrl = '/api/search';

  async search(query: string, options: SearchOptions = {}): Promise<SearchResponse> {
    const { limit = 10, offset = 0 } = options;

    // Validate query length
    if (!query || query.trim().length < 3) {
      throw new Error('Axtarış sorğusu ən azı 3 simvol olmalıdır');
    }

    const searchParams = new URLSearchParams({
      q: query.trim(),
      limit: limit.toString(),
      offset: offset.toString()
    });

    const url = `${this.baseUrl}?${searchParams.toString()}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data: SearchResponse = await response.json();
      return data;

    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Axtarış zamanı gözlənilməz xəta baş verdi');
    }
  }

  // Debounced search for real-time search suggestions
  private searchTimeouts = new Map<string, NodeJS.Timeout>();

  debouncedSearch(
    query: string, 
    callback: (results: SearchResponse | null, error: SearchError | null) => void,
    delay: number = 300,
    options: SearchOptions = {}
  ): void {
    const key = `${query}-${JSON.stringify(options)}`;
    
    // Clear existing timeout for this query
    const existingTimeout = this.searchTimeouts.get(key);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    // Set new timeout
    const timeout = setTimeout(async () => {
      try {
        const results = await this.search(query, options);
        callback(results, null);
      } catch (error) {
        const searchError: SearchError = {
          message: error instanceof Error ? error.message : 'Axtarış xətası',
          code: 'SEARCH_FAILED'
        };
        callback(null, searchError);
      } finally {
        this.searchTimeouts.delete(key);
      }
    }, delay);

    this.searchTimeouts.set(key, timeout);
  }

  // Cancel all pending searches
  cancelAllSearches(): void {
    this.searchTimeouts.forEach(timeout => clearTimeout(timeout));
    this.searchTimeouts.clear();
  }
}

// Export singleton instance
export const searchService = new SearchService();
export default searchService;
