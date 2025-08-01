'use client';

import React from 'react';
import styles from './SearchResults.module.css';
import { SearchResponse } from '@/app/api/search/route';
import { SearchError } from '@/services/searchService';

interface SearchResultsProps {
  results: SearchResponse | null;
  error: SearchError | null;
  isLoading: boolean;
  query: string;
  onResultClick?: (url: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  error,
  isLoading,
  query,
  onResultClick
}) => {
  // Don't render anything if no search has been performed
  if (!query.trim() || query.trim().length < 3) {
    return null;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={styles.searchResults}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <span className={styles.loadingText}>Axtarılır...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={styles.searchResults}>
        <div className={styles.errorContainer}>
          <span className={styles.errorText}>{error.message}</span>
        </div>
      </div>
    );
  }

  // No results
  if (results && results.results.length === 0) {
    return (
      <div className={styles.searchResults}>
        <div className={styles.noResultsContainer}>
          <span className={styles.noResultsText}>
            &quot;{query}&quot; üçün nəticə tapılmadı
          </span>
        </div>
      </div>
    );
  }

  // Results found
  if (results && results.results.length > 0) {
    return (
      <div className={styles.searchResults}>
        <div className={styles.resultsHeader}>
          <span className={styles.resultsCount}>
            {results.totalCount} nəticə tapıldı ({results.searchTime}ms)
          </span>
        </div>
        
        <div className={styles.resultsList}>
          {results.results.map((result) => (
            <div
              key={result.id}
              className={styles.resultItem}
              onClick={() => onResultClick?.(result.url)}
            >
              <div className={styles.resultContent}>
                <span className={styles.resultTitle}>
                  {highlightText(result.title, query)}
                </span>
                <span className={styles.resultSeparator}> - </span>
                <span className={styles.resultDescription}>
                  {highlightText(truncateText(result.content, 80), query)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

// Helper function to highlight search terms in text
function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  
  const searchTerm = query.trim().toLowerCase();
  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === searchTerm) {
      return (
        <mark key={index} className={styles.highlight}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

// Helper function to escape special regex characters
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper function to truncate text
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

export default SearchResults;
