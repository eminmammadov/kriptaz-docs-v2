'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import styles from './SearchOverlay.module.css';
import { searchService, SearchError } from '@/services/searchService';
import { SearchResponse } from '@/app/api/search/route';
import SearchResults from '../SearchResults';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // State management
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<SearchError | null>(null);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  // Input-a fokus vermək üçün
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200); // Animasiya bitdikdən sonra fokus ver
    }
  }, [isOpen]);

  // Reset state when overlay closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSearchResults(null);
      setError(null);
      setIsLoading(false);
      setIsSearchEnabled(false);
      searchService.cancelAllSearches();
    }
  }, [isOpen]);

  // Escape düyməsi ilə bağlamaq üçün
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Minimum character validation
  useEffect(() => {
    const trimmedQuery = query.trim();
    setIsSearchEnabled(trimmedQuery.length >= 3);

    // Clear results and errors when query is too short
    if (trimmedQuery.length < 3) {
      setSearchResults(null);
      setError(null);
      setIsLoading(false);
    }
  }, [query]);

  // Perform search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.trim().length < 3) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const results = await searchService.search(searchQuery);
      setSearchResults(results);
    } catch (err) {
      const searchError: SearchError = {
        message: err instanceof Error ? err.message : 'Axtarış zamanı xəta baş verdi',
        code: 'SEARCH_FAILED'
      };
      setError(searchError);
      setSearchResults(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Cleanup pending searches on unmount
  useEffect(() => {
    return () => {
      searchService.cancelAllSearches();
    };
  }, []);

  // Handle input change with debounced search
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Perform debounced search for real-time results
    if (newQuery.trim().length >= 3) {
      searchService.debouncedSearch(
        newQuery,
        (results, error) => {
          if (error) {
            setError(error);
            setSearchResults(null);
          } else {
            setSearchResults(results);
            setError(null);
          }
          setIsLoading(false);
        },
        300 // 300ms delay
      );
      setIsLoading(true);
    } else {
      // Clear results if query is too short
      setSearchResults(null);
      setError(null);
      setIsLoading(false);
      // Cancel any pending searches
      searchService.cancelAllSearches();
    }
  };

  // Handle form submission (Enter key)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSearchEnabled && !isLoading) {
      performSearch(query);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isSearchEnabled && !isLoading) {
      e.preventDefault();
      performSearch(query);
    }
  };

  // Handle result click
  const handleResultClick = (url: string) => {
    // Close the search overlay
    onClose();

    // Navigate to the result URL
    window.location.href = url;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
      />

      {/* Search Overlay */}
      <div className={`${styles.searchOverlay} ${isOpen ? styles.open : ''}`}>
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
          <IoSearchOutline className={styles.searchIcon} size={22} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Sənədləri axtarın"
            className={styles.searchInput}
            disabled={isLoading}
          />
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Axtarışı bağla"
          >
            <IoCloseOutline size={22} />
          </button>
        </form>

        {/* Search Results */}
        <SearchResults
          results={searchResults}
          error={error}
          isLoading={isLoading}
          query={query}
          onResultClick={handleResultClick}
        />
      </div>
    </>
  );
};

export default SearchOverlay;
