import { Button } from "antd";
import "./ComponentCard.css";
const ComponentCard = ({ children, title, btnTitle,onClick }) => {
  return (
    <div className="component-card-container">
      <div className="component-card-header">
        <div className="component-card-title">{title}</div>
        <Button className="component-card-btn" onClick={onClick}>{btnTitle}</Button>
      </div>
      {children}
    </div>
  );
};

export default ComponentCard;
