import React from "react";
import Home from ".././imagine/Home.png";
import LogoQuanTriThanhVien from ".././imagine/QuanTriThanhVien.png";
import LogoDoAn from ".././imagine/DoAn.png";
import LogoDanhMuc from ".././imagine/DanhMuc.png";
import LogoToChuc from ".././imagine/ToChuc.png";
import MuiTen from ".././imagine/MuiTen.png";
import { Link } from "react-router-dom";


function LeftBar() {
    return (

        <div className=" LeftBar-1 border-r-2 border-gray-300">
            <img src={Home} className="anh"></img>
            <div>
            <button className="QuanTriThanhVien flex flex-row space-x-2 py-2 pl-2	">
                <img src={LogoQuanTriThanhVien} ></img>
                <Link to="/QuanTriPage">
                            <h1> Quản Trị Thành Viên </h1></Link>
            </button>
            <button className="DanhMuc flex flex-row space-x-2 py-2 pl-2"> 
                <img src={LogoDanhMuc}></img>
                <Link to="/DanhMucMidPage">  
                <h1> Danh Mục </h1></Link>
                <img src={MuiTen} className="MuiTenDanhMuc "></img>  
            </button>
            <button className="DoAn flex flex-row space-x-2 py-2 pl-2">
                <img src={LogoDoAn}></img>
                <h1>Đồ Án</h1>
                <img src={MuiTen} className="MuiTenDoAn "></img>
            </button>
            <button className="ToChuc flex flex-row space-x-2 py-2 pl-2">
                <img src={LogoToChuc}></img>
                <h1>Tổ Chức</h1>
            </button>
            </div>
        </div>
    );
}

export default LeftBar;