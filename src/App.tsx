import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";
import { loaderSelector } from "./redux/slices/loaderSlice";

const App: FC = () => {
  const { count } = useSelector(loaderSelector);
  return (
    <div className="App">
      {count > 0 && <Spinner />}
      <Layout />
    </div>
  );
};

export default App;
