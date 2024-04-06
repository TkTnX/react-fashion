import React, { useState } from "react";
import s from "./s.module.scss";
import { MdOutlineClear } from "react-icons/md";
export const Sale: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => setIsVisible(false);

  return (
    <>
      {isVisible ? (
        <div className={s.sale}>
          <p>Весенняя скидка -20%</p>
          <button className={s.close}>
            <MdOutlineClear onClick={handleClose} />
          </button>
        </div>
      ) : null}
    </>
  );
};
