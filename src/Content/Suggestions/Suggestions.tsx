import { useState, useEffect } from "react";
import './Suggestions.css';
import { FiSearch } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";

import fetchSuggestions from './Data';
import usePagination from '../../hooks/usePagination';
import Pagination from "../../Pagination/Pagination";

const Suggestions = () => {
  const { currentPage, totalResults, setCurrentPage, 
    totalPages, currentList, setCurrentList, resultsPerPage, setResultsPerPage } 
  = usePagination(fetchSuggestions);
  const [maxUnitLength, setMaxUnitLength] = useState<number>(Infinity);

  useEffect(() => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    setCurrentList(fetchSuggestions.slice(start, end));
  }, [currentPage, resultsPerPage]);

  useEffect(() => { 
    const updateMaxUnitLength = () => {
      if (window.innerWidth <= 1024 && 576 < window.innerWidth) {
        setMaxUnitLength(16);
      } else {
        setMaxUnitLength(Infinity);
      }
    };

    updateMaxUnitLength();

    window.addEventListener('resize', updateMaxUnitLength);

    return () => window.removeEventListener('resize', updateMaxUnitLength);
  }, []);

  return (
    <div className="Suggestions">
      <div className="child-header-container">
        <h3>Đề nghị mua</h3>
        <span>Tạo PAM cho 1 đề nghị</span>
      </div>
      <div className='search-container'>
        <span className="search-icon-container">
          <FiSearch
            size={14}
            className={`search-icon`}
          />
        </span>
        <form action="" className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm"
          />
        </form>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className='s-col-1 head'>Mã ĐNMS</th>
              <th className='s-col-2 head'>Đơn vị</th>
              <th className='s-col-3 head'></th>
            </tr>
          </thead>
          <tbody>
          {currentList.map((item, index) => (
            <tr key={index}>
              <td className='s-col-1 data'>{item.code}</td>
              <td className='s-col-2 data'>
                {item.unit.length > maxUnitLength ? item.unit.slice(0, maxUnitLength) + '...' : item.unit}
              </td>
              <td className='s-col-3 data'><span className='addfile-icon'><VscNewFile size={14}/></span></td>
            </tr>
          ))}             
          </tbody>
        </table>
      </div>
      <Pagination 
      currentPage={currentPage} 
      totalResults={totalResults}
      totalPages={totalPages} 
      onChange={setCurrentPage} 
      resultsPerPage={resultsPerPage}
      setResultsPerPage={setResultsPerPage}
      />
    </div>
  );
}

export default Suggestions;
