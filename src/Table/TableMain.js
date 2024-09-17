import React from "react";
import Midle from "../compo/Midle";
import Footer from "../global/Footer";
import Header from "../global/Header";
import style from "../pizza.module.css";
import Table_Base from "./Table_Base";

const TableMain = () => {
  return (
    <div>
      <Header className={style.holic} header="Welcome To Table Reservation" />
      <Table_Base />
      <Footer className={style.footer} />
    </div>
  );
};

export default TableMain;
