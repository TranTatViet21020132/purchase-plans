import './Nav.css';
import { useState, useEffect, useRef } from 'react';
import { GoCreditCard } from "react-icons/go";
import { 
  IoNotificationsOutline, 
  IoSettingsOutline,
  IoLayersOutline
 } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Nav = () => {
  const categories = [
    "Trang chủ", "Kế hoạch", "Đề nghị mua", "Phương án mua", 
    "Đơn hàng", "Thanh toán", "Biểu mẫu", "Báo cáo"]

  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const currentTab = tabsRef.current[activeCategory] as HTMLLIElement;
    setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
    setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
  }, [activeCategory]);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  }

  const handleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  }

  const getTab = (item: string) => {
    switch (item) {
      case "Kế hoạch":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
          <span>{item}</span><BsChevronDown size={12}/></div>;
      case "Phương án mua":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
          <span>{item}</span><BsChevronDown size={12}/></div>;
      case "Đơn hàng":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
          <span>{item}</span><BsChevronDown size={12}/></div>;
      case "Thanh toán":
        return <div style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
          <>{item}</><BsChevronDown size={12}/></div>;
      default:
        return <>{item}</>;
    }
  };

  return (
    <nav className="Nav">
      <div className="logo-containter">
        <GoCreditCard className={`nav-icon`} size={20}/>
        <a href="">
          <span>eProcurement</span>
        </a>
      </div>
      <div className="nav-contents">
        <div className="categories-container">
          <ul className={`categories ${isMenuClicked ? 'clicked' : ''}`}>
            {categories.map((item, index) => (
              <li
                ref={(el) => (tabsRef.current[index] = el)}
                className={`category 
                ${index === activeCategory ? 'active' : ''}`}
                onClick={() => handleCategoryClick(index)}
                key={index}
              >
                <span>{getTab(item)}</span>
                {/* <span>{item} <BsChevronDown size={14}/></span> */}
                {/* <span
                  className="bottom-bar"
                  style={{ left: `${tabUnderlineLeft}px`, width: `${tabUnderlineWidth}px` }}
                /> */}
              </li>
            ))}
          </ul>

        </div>
        <div className="utilities-container">

          <div className="nav-icon-container tab">
            <IoNotificationsOutline
            className={`nav-icon`}
            size={18}
            />
          </div>
          
          <div className="nav-icon-container tab">
            <IoSettingsOutline
            className={`nav-icon`}
            size={18}
            />
          </div>

          <div className="avatar tab">
            <span>EL</span>
          </div>

          <div className="nav-icon-container tab">
            <TbGridDots
            className={`nav-icon`}
            size={20}
            />
          </div>
          <div className="nav-icon-container tab-menu">
            <IoLayersOutline className={`nav-icon`} onClick={handleMobileMenu} size={18} />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
