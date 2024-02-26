import './Lists.css';
import { useState, useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BsChevronDown, BsChevronUp, BsThreeDotsVertical } from 'react-icons/bs';
import { FiSearch, FiXCircle } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import { TbCircleDotted, TbCircleDashedX } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidPieChartAlt } from "react-icons/bi";
import fetchList from './Data';
import usePagination from '../../hooks/usePagination';
import Pagination from "../../Pagination/Pagination";

const Lists = () => {
  const { currentPage, totalResults, setCurrentPage, totalPages, 
    currentList, setCurrentList, resultsPerPage, setResultsPerPage } 
  = usePagination(fetchList);
  const [maxUnitLength, setMaxUnitLength] = useState<number>(Infinity);

  useEffect(() => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    setCurrentList(fetchList.slice(start, end));
  }, [currentPage, resultsPerPage]);

  useEffect(() => {
    const updateMaxUnitLength = () => {
      if (window.innerWidth <= 1024) {
        setMaxUnitLength(16);
      } else {
        setMaxUnitLength(Infinity);
      }
    };

    updateMaxUnitLength();

    window.addEventListener('resize', updateMaxUnitLength);

    return () => window.removeEventListener('resize', updateMaxUnitLength);
  }, []);

  const getStatus = (status: string) => {
    switch (status) {
      case "Mới tạo":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.34rem" }}>
          <TbCircleDotted size={16}/><span>{status}</span></div>;
      case "Chờ duyệt":
      case "Đang diễn ra":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.34rem" }}>
          <BiSolidPieChartAlt size={16}/><span>{status}</span></div>;
      case "Từ chối":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.34rem" }}>
          <TbCircleDashedX size={16}/><span>{status}</span></div>;
      case "Đã hủy":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.34rem" }}>
          <FiXCircle size={16} style={{color: "red"}}/><span>{status}</span></div>;
      case "Hoàn thành PAM":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.34rem" }}>
          <FaCircleCheck size={14}/><span>{status}</span></div>;;
      default:
        return null;
    }
  };

  return (
    <div className="Lists">
      <div className="child-header-container">
        <h3>Danh sách phương án mua</h3>
        <span>Danh sách các Phương án mua PAM
          được tạo ra trên hệ thống mà người dùng được phân quyền truy xuất</span>
      </div>
      <div className="options-container">
        <div className="left-options">
          <div className='view-icon-container'>
            <IoEyeOutline size={14}/>
            <span>View:</span>
          </div>
          <div className="view-options">
            <span>View all</span>
            <BsChevronDown size={14}/>
          </div>
        </div>
        <div className="right-options">
          <FiSearch style={{cursor: "pointer"}}/>
          <HiOutlineFilter style={{cursor: "pointer"}}/>
          <div className="new-pam">
            <span>Tạo mới PAM</span>
            <div className="new-pam-icon">
              <IoIosAdd />
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className='l-col head first'>Mã PAM #</th>
              <th className='l-col head'>Tên PAM</th>
              <th className='l-col head'>Người tạo</th>
              <th className='l-col head'>Ngày tạo</th>
              <th className='l-col head'>Loại sự kiện</th>
              <th className='l-col head'>Ngày bắt đầu báo giá</th>
              <th className='l-col head'>Ngày kết thúc báo giá</th>
              <th className='l-col head'>Số lượng phản hồi</th>
              <th className='l-col head'>Trạng thái</th>
              <th className='l-col head'></th>
            </tr>
          </thead>
          <tbody>
            {currentList.map((item, index) => (
              <tr key={index}>
                <td className='l-col data first'>{item.code}</td>
                <td className='l-col data'>
                  {item.name.length > maxUnitLength ? item.name.slice(0, maxUnitLength) + '...' : item.name}
                </td>
                <td className='l-col data'>{item.creator}</td>
                <td className='l-col data'>{item.create_date}</td>
                <td className='l-col data'>{item.type}</td>
                <td className='l-col data'>{item.start_date}</td>
                <td className='l-col data'>{item.end_date}</td>
                <td className='l-col data'>{item.response}</td>
                <td className='l-col data'>{getStatus(item.status)}</td>
                <td className='l-col data'><BsThreeDotsVertical size={14}/></td>
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

export default Lists;
