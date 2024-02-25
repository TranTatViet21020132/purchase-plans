import React from 'react';
import { IoChevronBack, IoChevronForward, IoPlaySkipBackOutline, IoPlaySkipForwardOutline } from "react-icons/io5";

interface Pagination {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<Pagination> = ({ currentPage, totalPages, onChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    onChange(1);
  };

  const handleLastPage = () => {
    onChange(totalPages);
  };

  return (
    <div className="pagination-container">
        <ul className="pagination">
        <li className={`${currentPage <= 1 ? 'disabled' : ''}`} onClick={handleFirstPage}>
            <span><IoPlaySkipBackOutline/></span>
        </li>
        <li className={`${currentPage <= 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>
            <span><IoChevronBack/></span>
        </li>
        <li className='indicator'>
            <span>{currentPage}</span>
        </li>
        <li className={`${currentPage >= totalPages ? 'disabled' : ''}`} onClick={handleNextPage}>
            <span><IoChevronForward/></span>
        </li>
        <li className={`${currentPage >= totalPages ? 'disabled' : ''}`} onClick={handleLastPage}>
            <span><IoPlaySkipForwardOutline/></span>
        </li>
        </ul>         
    </div>
  );
}

export default Pagination;
