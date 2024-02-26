import React, { useState, useMemo } from 'react';
import { Dispatch, SetStateAction } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import './Pagination.css';

interface Pagination {
  currentPage: number;
  totalResults: number;
  totalPages: number;
  onChange: (page: number) => void;
  resultsPerPage: number;
  setResultsPerPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<Pagination> = ({ currentPage, totalResults, totalPages, 
  onChange, resultsPerPage, setResultsPerPage }) => {
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

  const [modeMenuState, setModeMenuState] = useState(false);

  const handleResultsChange = (resultsPerPage: number) => {
    setResultsPerPage(resultsPerPage);
  };
  
  const handleMouseOver = () => {
    setModeMenuState(true);
  };

  const handleMouseOut = () => {
    setModeMenuState(false);
  };
  
  return (
    <div className="pagination-container">
      <div className="records-control-container">
        <div className="records-control"
          onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}
        >
          <div className="records-control-header">
            <span>Items per page: </span>
            <span>{resultsPerPage} {modeMenuState === false ? <BsChevronDown size={14}/> : <BsChevronUp size={14}/>}</span>
          </div>          
          <ul>
            <li
            onClick={() => handleResultsChange(8)}
            className={resultsPerPage === 8 ? 'active' : ''}>
              <span>8</span>
              {resultsPerPage === 8 && <GoCheck />}
            </li>
            <li
            onClick={() => handleResultsChange(16)}
            className={resultsPerPage === 16 ? 'active' : ''}>
              <span>16</span>
              {resultsPerPage === 16 && <GoCheck />}
            </li>
            <li
            onClick={() => handleResultsChange(24)}
            className={resultsPerPage === 24 ? 'active' : ''}>
              <span>24</span>
              {resultsPerPage === 24 && <GoCheck />}
            </li>
          </ul>
        </div>
        <span className="records-label">
          {`${(currentPage - 1) * resultsPerPage + 1} - 
          ${Math.min(resultsPerPage * currentPage, totalResults)} 
          of ${totalResults}`}
        </span>
      </div>
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
