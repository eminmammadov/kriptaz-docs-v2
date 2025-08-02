import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styles from './SearchButton.module.css';

interface SearchButtonProps {
  onClick?: () => void;
  'aria-label'?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  'aria-label': ariaLabel
}) => {
  return (
    <button
      className={`${styles.searchButton} searchButton`}
      onClick={onClick}
      aria-label={ariaLabel || "Sənədlərdə axtarış et"}
      type="button"
      role="button"
    >
      <IoSearchOutline size={22} />
    </button>
  );
};

export default SearchButton;
