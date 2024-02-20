import './Lists.css';
import { IoEyeOutline } from "react-icons/io5";
import { BsChevronDown, BsChevronUp, BsThreeDotsVertical } from 'react-icons/bs';
import { FiSearch, FiXCircle } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import { TbCircleDotted, TbCircleDashedX } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidPieChartAlt } from "react-icons/bi";

type List = {
  code: string;
  name: string;
  creator: string;
  create_date: string;
  type: string;
  start_date: string;
  end_date: string;
  response: string;
  status: string;
}

const Lists = () => {
  const items: List[] = [
    {
      code: "SE.2023.0000010",
      name: "Sự kiện chào giá cá hồi Nauy",
      creator: "Hoàng Minh Lý",
      create_date: '06-03-2023',
      type: "RFQ",
      start_date: "06-03-2023",
      end_date: "09-03-2023",
      response: "0 phản hồi",
      status: "Mới tạo"
    },
    {
      code: "SE.2023.0000009",
      name: "Sự kiện đấu thầu lò nướng 2023",
      creator: "Lê Hồng Minh",
      create_date: '05-02-2023',
      type: "RFQ",
      start_date: "06-03-2023",
      end_date: "15-03-2023",
      response: "0 phản hồi",
      status: "Chờ duyệt"
    },
    {
      code: "SE.2023.0000008",
      name: "Sự kiện chào giá sản phẩm sữa",
      creator: "Lê Hồng Minh",
      create_date: '18-01-2023',
      type: "RFP",
      start_date: "20-01-2023",
      end_date: "26-01-2023",
      response: "0 phản hồi",
      status: "Từ chối"
    },
    {
      code: "SE.2023.0000007",
      name: "Sự kiện ua lò nướng công ng...",
      creator: "Mai Linh Lan",
      create_date: '15-01-2023',
      type: "RFP",
      start_date: "18-01-2023",
      end_date: "06-03-2023",
      response: "0 phản hồi",
      status: "Đã hủy"
    },
    {
      code: "SE.2023.0000006",
      name: "Sự kiện marketing",
      creator: "Mai Linh Lan",
      create_date: '06-03-2023',
      type: "RFP",
      start_date: "06-03-2023",
      end_date: "06-03-2023",
      response: "0 phản hồi",
      status: "Đang diễn ra"
    },
    {
      code: "SE.2023.0000005",
      name: "Sự kiện chào giá máy móc VP",
      creator: "Lê Hồng Minh",
      create_date: '26-01-2023',
      type: "RFI",
      start_date: "28-01-2023",
      end_date: "28-02-2023",
      response: "1 phản hồi",
      status: "Hoàn thành PAM"
    },
  ];

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
        <span>Danh sách các Phương án mua &lt;PAM&gt; 
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
            {items.map((item, index) => (
              <tr key={index}>
                <td className='l-col data first'>{item.code}</td>
                <td className='l-col data'>{item.name}</td>
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
        </table>
      </div>
      
    </div>
  );
}

export default Lists;
