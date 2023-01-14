import { FC } from "react";
import { Spin } from "antd";
import "./Spinner.scss";

const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-wrapper">
        <Spin className="spinner" size="large" />
      </div>
    </div>
  );
};

export default Spinner;
