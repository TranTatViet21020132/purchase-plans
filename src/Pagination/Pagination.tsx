import React, { useMemo } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import './Pagination.css';

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

  const generatePageNumbers = (currentPage: number, totalPages: number) => {
    let pageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;

    if (currentPage >= 4 && currentPage <= totalPages - 2) {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    } else if (currentPage <= 3) {
      endPage = Math.min(totalPages, 5);
    } else {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={`indicator ${i === currentPage ? 'active' : ''}`} onClick={() => onChange(i)}>
          <span>{i}</span>
        </li>
      );
    }

    return pageNumbers;
  };

  const pageNumbers = useMemo(() => generatePageNumbers(currentPage, totalPages), [currentPage, totalPages]);

  return (
    <div className="pagination-container">
        <ul className="pagination">
        <li className={`${currentPage <= 1 ? 'disabled' : ''}`} onClick={handleFirstPage}>
            <span><HiChevronDoubleLeft /></span>
        </li>
        <li className={`${currentPage <= 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>
            <span><IoChevronBack /></span>
        </li>
        {pageNumbers}
        <li className={`${currentPage >= totalPages ? 'disabled' : ''}`} onClick={handleNextPage}>
            <span><IoChevronForward /></span>
        </li>
        <li className={`${currentPage >= totalPages ? 'disabled' : ''}`} onClick={handleLastPage}>
            <span><HiChevronDoubleRight /></span>
        </li>
        </ul>         
    </div>
  );
}

export default Pagination;
