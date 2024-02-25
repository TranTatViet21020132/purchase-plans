import { useState, useEffect } from "react";
import './Items.css';
import { FiSearch } from "react-icons/fi";

import fetchSuggestions from './Data';
import usePagination from '../../hooks/usePagination';
import Pagination from "../../Pagination/Pagination";

const resultsPerPage = 5;

const Items = () => {
  const { currentPage, setCurrentPage, totalPages, currentList, setCurrentList } = usePagination(resultsPerPage, fetchSuggestions);

  useEffect(() => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    setCurrentList(fetchSuggestions.slice(start, end));
  }, [currentPage, resultsPerPage]);
  
  return (
    <div className="Items">
      <div className="child-header-container">
        <h3>Hàng hóa cần mua</h3>
        <span>Lựa chọn hàng hóa đang có nhu cầu để mua tập trung</span>
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
              <th className='i-col-1 check-box'><input type="checkbox" disabled/></th>
              <th className='i-col-2 head'>Vật tư, hàng hóa</th>
              <th className='i-col-3 head'>Số lượng cần mua</th>
            </tr>
          </thead>
          <tbody>
            {currentList.map((item, index) => (
              <tr key={index}>
                <td className='i-col-1 check-box'><input type="checkbox" /></td>
                <td className='i-col-2 data'>{item.name}</td>
                <td className='i-col-3 data'>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
    </div>
  );
}

export default Items;
