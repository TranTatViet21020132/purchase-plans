import './Content.css';
import Items from './Items/Items';
import Suggestions from './Suggestions/Suggestions';
import List from './List/Lists'

const Content = () => {
  return (
    <div className="Content">
      <div className="header-container">
        <div className="link-trace">
          <span><a href=""><span>Tổng quan </span></a> /</span>
        </div>
        <h2>Quản lý phương án mua</h2>
      </div>
      <div className="contents-container">
        <div className="top-contents">
          <Items />
          <Suggestions />
        </div>
        <List />
      </div>
    </div>
  );
}

export default Content;
