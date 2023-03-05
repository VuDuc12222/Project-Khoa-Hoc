import React from "react";
import IconThongBao from ".././imagine/IconThongBao.png";
import IconTrangChu from ".././imagine/IconTrangChu.png";
import IconVietNam from ".././imagine/IconVietNam.png";
import logout from ".././imagine/logout.png";
import { StyleSheet, View, Dimensions } from "react-native";
import ToChucDetail from "./ToChucDetail";

const Logout = () => {
  window.location.href = '/'
      //window.localStorage.getItem("token")
      localStorage.removeItem('token')}

var { width } = Dimensions.get("window");
var box_count = 1;
var box_width = width / box_count;

export default function TopBar() {
  const HienLen = () => {
    document.getElementById("TrangChu").classList.remove("hidden");
  } 

  const TatDi = () => {
    document.getElementById("TrangChu").classList.add("hidden");
  }



  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <div className="TopBar-1 flex flex-row  ">
          <p className="TruongDaiHoc"> Trường Đại Học A </p>
          <button className="IconVietNam"><img src={IconVietNam}></img></button>
          <button className="IconThongBao"><img src={IconThongBao}></img></button>
          <button className="IconTrangChu" onClick={HienLen} onDoubleClick={TatDi} ><img src={IconTrangChu} ></img></button>
          </div>
      </View>
      <View style={[styles.box, styles.box2]}>
        <div className="MidBar flex flex-row border-2 shadow-inner h-20 ">
          <p className="pl-8 pt-4"> Tổ Chức </p>
        </div>
      </View>
      <View style={[styles.box, styles.box3]}>
        <div className="LastBar flex flex-row border-2 shadow-inner h-full ">
          <ToChucDetail />
        </div>
      </View>
      <View style={[styles.box, styles.box4]}>
        <div className="ModalTrangChu hidden " id="TrangChu">
        <img src={IconTrangChu} className="ModalTrangChuAvt"></img>
        <h1 className="ModalTrangChuName"> Nguyễn Văn A </h1>
        <button className="ModalTrangChuBtn "> Quản Lý Tài Khoản </button>
        <button className="ModalTrangChuDangXuat flex flex-row space-x-2 py-2 pl-2 border-t-2 " onClick={Logout}>
          <img src= {logout}></img>
          <h1>Đăng Xuất</h1>
        </button>
        </div>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  box: {
    width: box_width
  },
  box1: {
    flex: 1,
    backgroundColor: "white"
  },
  box2: {
    flex: 1,
    backgroundColor: "white"
  },
  box3: {
    flex: 5,
    backgroundColor: "rgb(241 245 249)"
  },
  box4: {
    flex: 1,
    backgroundColor: "white"
  },
});


