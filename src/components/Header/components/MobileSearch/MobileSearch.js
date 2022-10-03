import React, { useState } from "react";
import { Drawer } from "antd";
import { BsSearch } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./mobileSearch.scss";
import Search from "../Search";

const MobileSearch = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="search-responsive-icon" onClick={() => setOpen(true)}>
        <BsSearch />
      </div>
      <Drawer
        height={50}
        placement="top"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        className="searchs-responsive-drawer"
      >
        <div className="search-box">
          <div className="back-icon" onClick={() => setOpen(false)}>
            <IoMdArrowRoundBack />
          </div>
          <Search />
        </div>
      </Drawer>
    </>
  );
};

export default MobileSearch;
