import React, {Fragment} from "react";
import Home from ".././imagine/Home.png";
import LogoQuanTriThanhVien from ".././imagine/QuanTriThanhVien.png";
import LogoDoAn from ".././imagine/DoAn.png";
import LogoDanhMucXanh from ".././imagine/DanhMucXanh.png";
import LogoToChucKhongMau from ".././imagine/ToChucKhongMau.png";
import MuiTen from ".././imagine/MuiTen.png";
import { StyleSheet, View, Dimensions } from "react-native";
import MuiTenDiXuong from ".././imagine/MuiTenDiXuong.png";
import DanhSachNganhNghe from ".././components/DanhSachNganhNghe";
import {Link} from "react-router-dom";

var { width } = Dimensions.get("window");
var { height } = Dimensions.get("window");
var box_count = 2;
var box_width = width /box_count;
var box_height = height;

export default function DanhMucPage() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
      <Fragment>
      <div className="DanhMucPage-1  border-r-2 border-gray-300">
            <img src={Home} className="anh"></img>
            <div>
            <button className="QuanTriThanhVien flex flex-row space-x-2 py-2 pl-2	">
                <img src={LogoQuanTriThanhVien} ></img>
                <Link to="/QuanTriPage">
                            <h1> Quản Trị Thành Viên </h1></Link>
            </button>
            <button className="DanhMucDM flex flex-row space-x-2 py-2 pl-2"> 
                <img src={LogoDanhMucXanh} ></img>
                <Link to="/MidPage">
                <h1> Danh Mục </h1></Link>
                <img src={MuiTenDiXuong} className="MuiTenDanhMuc "></img>  
            </button>
            <button className="NganhNgheDM flex flex-row space-x-2 py-2 pl-2">
                <h1> Ngành Nghề </h1>
            </button>
            <button className="KhoaDM flex flex-row space-x-2 py-2 pl-2">
              <Link to="/KhoaPage">
                <h1> Khóa </h1></Link>
            </button>
            <button className="LopDM flex flex-row space-x-2 py-2 pl-2">
            <Link to="/LopPage">
                <h1> Lớp </h1></Link>
            </button>
            <button className="DoAnDM flex flex-row space-x-2 py-2 pl-2">
                <img src={LogoDoAn}></img>
                <h1>Đồ Án</h1>
                <img src={MuiTen} className="MuiTenDoAn "></img>
            </button>
            <button className="ToChucKhongMau flex flex-row space-x-2 py-2 pl-2">
                <img src={LogoToChucKhongMau}></img>
                <Link to="/MainPage">
                <h1>Tổ Chức</h1></Link>
            </button>
            </div>
        </div>
        </Fragment>
      </View>
    <View style={[styles.box, styles.box2]}>
        <DanhSachNganhNghe  />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection: "row"
  },
  box: {
    height: box_height,
    width: box_width
  },
  box1: {
    flex: 1,
    backgroundColor: "white"
  },
  box2: {
    flex: 5,
    backgroundColor: "white"
  }
});