import { NextRequest, NextResponse } from 'next/server';
import { searchContent, ContentItem } from '@/data/content';

export interface SearchResult extends ContentItem {
  relevanceScore?: number;
}

export interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  query: string;
  searchTime: number;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');

  // Validate query parameter
  if (!query || query.trim().length < 3) {
    return NextResponse.json(
      { 
        error: 'Axtarış sorğusu ən azı 3 simvol olmalıdır',
        code: 'INVALID_QUERY_LENGTH'
      },
      { status: 400 }
    );
  }

  const startTime = Date.now();

  try {
    // Simulate search delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 150));

    // Use real content search function
    const searchResults = searchContent(query.trim(), limit, offset);
    const searchTime = Date.now() - startTime;

    const response: SearchResponse = {
      results: searchResults.results,
      totalCount: searchResults.totalCount,
      query: query.trim(),
      searchTime
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { 
        error: 'Axtarış zamanı xəta baş verdi',
        code: 'SEARCH_ERROR'
      },
      { status: 500 }
    );
  }
}
