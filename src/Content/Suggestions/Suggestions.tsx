import './Suggestions.css';
import { FiSearch } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";

type Suggestion = {
  code: string;
  unit: string;
}

type Good = {
  name: string;
  quantity: string;
}

const Suggestions = () => {
  const suggestions: Suggestion[] = [
    {
      code: "PR.2023.0000010",
      unit: "GGG-NH Gogi Tô Hiệu",
    },
    {
      code: "PR.2023.0000009",
      unit: "GGG-NH Gogi Nguyễn Chí Thanh",
    },
    {
      code: "PR.2023.0000008",
      unit: "GGG-NH Sumo Nguyễn Phong Sắc",
    },
    {
      code: "PR.2023.0000008",
      unit: "GGG-NH Sumo Nguyễn Thị Định",
    },
    {
      code: "PR.2023.0000008",
      unit: "GGG-Phòng kế hoạch và phát tr...",
    }
  ];
  
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
          <tr>
            <th className='s-col-1 head'>Mã ĐNMS</th>
            <th className='s-col-2 head'>Đơn vị</th>
            <th className='s-col-3 head'></th>
          </tr>
          {suggestions.map((item, index) => (
            <tr key={index}>
              <td className='s-col-1 data'>{item.code}</td>
              <td className='s-col-2 data'><>{item.unit}</></td>
              <td className='s-col-3 data'><span className='addfile-icon'><VscNewFile size={14}/></span></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Suggestions;
