import React, {Fragment} from "react";
import Home from ".././imagine/Home.png";
import LogoQuanTriThanhVien from ".././imagine/QuanTriThanhVien.png";
import LogoDoAn from ".././imagine/DoAn.png";
import LogoDanhMuc from ".././imagine/DanhMuc.png";
import LogoToChucKhongMau from ".././imagine/ToChucKhongMau.png";
import MuiTen from ".././imagine/MuiTen.png";
import { StyleSheet, View, Dimensions } from "react-native";
import {Link} from "react-router-dom";
import QuanTri from "../components/QuanTri";

var { width } = Dimensions.get("window");
var { height } = Dimensions.get("window");
var box_count = 2;
var box_width = width /box_count;
var box_height = height;

export default function QuanTriPage() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
      <Fragment>
      <div className="DanhMucPage-1  border-r-2 border-gray-300">
            <img src={Home} className="anh"></img>
            <div>
            <button className="QuanTriThanhVien flex flex-row space-x-2 py-2 pl-2	">
                <img src={LogoQuanTriThanhVien} ></img>
                <h1> Quản Trị Thành Viên </h1>
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
            <button className="ToChucMP flex flex-row space-x-2 py-2 pl-2">
                <img src={LogoToChucKhongMau}></img>
                <Link to="/MainPage">
                <h1>Tổ Chức</h1></Link>
            </button>
            </div>
        </div>
        </Fragment>
      </View>
    <View style={[styles.box, styles.box2]}>
        <QuanTri />
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