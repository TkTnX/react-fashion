import React from "react";
import { BarLoader } from "react-spinners";
import s from "./s.module.scss";

type LoaderProps = {
  loading: boolean;
};
export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={s.loader}>
      <BarLoader
        color={"#000"}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
