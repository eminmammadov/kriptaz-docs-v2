import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styles from './SearchButton.module.css';

interface SearchButtonProps {
  onClick?: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button
      className={`${styles.searchButton} searchButton`}
      onClick={onClick}
      aria-label="Axtarış"
    >
      <IoSearchOutline size={22} />
    </button>
  );
};

export default SearchButton;
