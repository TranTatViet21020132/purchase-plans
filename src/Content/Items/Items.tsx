import './Items.css';
import { FiSearch } from "react-icons/fi";

type Good = {
  name: string;
  quantity: string;
}

const Items = () => {
  const items: Good[] = [
    {
      name: "Bơ, phô mai",
      quantity: "20.560,00 kg",
    },
    {
      name: "Thực phẩm khô, gia vị",
      quantity: "64.203,00 kg",
    },
    {
      name: "Bàn đá, bàn gang",
      quantity: "10,00 Cái",
    },
    {
      name: "Gương kính",
      quantity: "26,00 Cái",
    },
    {
      name: "Thiết bị cân",
      quantity: "34,00 Cái",
    },
  ];
  
  return (
    <div className="Items">
      <div className="child-header-container">
        <h3>Hàng hóa cần mua</h3>
        <span>Lựa chọn hàng hóa dang co nhu cau de mua tap trung</span>
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
              <th className='i-col-1 check-box'><input type="checkbox" disabled/></th>
              <th className='i-col-2 head'>Vật tư, hàng hóa</th>
              <th className='i-col-3 head'>Số lượng cần mua</th>
            </tr>
            {items.map((item, index) => (
              <tr key={index}>
                <td className='i-col-1 check-box'><input type="checkbox" /></td>
                <td className='i-col-2 data'>{item.name}</td>
                <td className='i-col-3 data'>{item.quantity}</td>
              </tr>
            ))}
        </table>
      </div>
      
    </div>
  );
}

export default Items;
