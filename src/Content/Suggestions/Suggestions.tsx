import { useState, useEffect } from "react";
import './Suggestions.css';
import { FiSearch } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";

type Suggestion = {
  code: string;
  unit: string;
}

const Suggestions = () => {
  const fetchedSuggestions: Suggestion[] = [
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

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [maxUnitLength, setMaxUnitLength] = useState<number>(Infinity);

  useEffect(() => {
    setSuggestions(fetchedSuggestions);
    
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
          <tr>
            <th className='s-col-1 head'>Mã ĐNMS</th>
            <th className='s-col-2 head'>Đơn vị</th>
            <th className='s-col-3 head'></th>
          </tr>
          {suggestions.map((item, index) => (
            <tr key={index}>
              <td className='s-col-1 data'>{item.code}</td>
              <td className='s-col-2 data'>
                {item.unit.length > maxUnitLength ? item.unit.slice(0, maxUnitLength) + '...' : item.unit}
              </td>
              <td className='s-col-3 data'><span className='addfile-icon'><VscNewFile size={14}/></span></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Suggestions;
