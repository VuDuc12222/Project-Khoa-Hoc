import React, { useState }  from "react";
import IconThongBao from ".././imagine/IconThongBao.png";
import IconTrangChu from ".././imagine/IconTrangChu.png";
import IconVietNam from ".././imagine/IconVietNam.png";
import logout from ".././imagine/logout.png";
import { StyleSheet, View, Dimensions } from "react-native";
import BangNghe from "./BangNghe";
import axios from "axios";
import { instance } from "../utils/api";

const Logout = () => {
  window.location.href = '/'
      //window.localStorage.getItem("token")
      localStorage.removeItem('token')}

var { width } = Dimensions.get("window");
var { height } = Dimensions.get("window");
var box_count = 2;
var box_width = width / box_count;
var box_height = height;

export default function DanhSachNganhNghe() {
  const [MaNganh,setMaNganh] = useState ('')
  const [TenNganh,setTenNganh] = useState('')
  const HienLen = () => {
    document.getElementById("TrangChu").classList.remove("hidden");
  }

  const TatDi = () => {
    document.getElementById("TrangChu").classList.add("hidden");
  }

  const ModalNganhNghe = () => {
    document.getElementById("ThemNghe").classList.remove("hidden")
  }

  const TatModalNganhNghe = () => {
    document.getElementById("ThemNghe").classList.add("hidden")
  }
  
  const ThemNganhNghe = () => {
    instance ({
      url: 'https://training.bks.center/api/field',
      method: 'POST',
      params:{
        code:MaNganh,
        name:TenNganh,
      }
  }).then(result => {
    TatModalNganhNghe()
    console.log(result.data)
  }) 
  .catch(error => {
    alert('Lỗi')
    console.log(error)
  })
  }


  const NhapMaNganh = (e) => {
    console.log(e.target.value)
    setMaNganh(e.target.value)
  }
  
  const NhapTenNganh = (ea) => {
    setTenNganh(ea.target.value)
  }

  return (
    
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <div className="DanhSachNganhNgheTop-1 flex flex-row  ">
          <p className="TruongDaiHocDS"> Trường Đại Học A </p>
          <button className="IconVietNamDS"><img src={IconVietNam}></img></button>
          <button className="IconThongBaoDS"><img src={IconThongBao}></img></button>
          <button className="IconTrangChuDS" onClick={HienLen} onDoubleClick={TatDi} ><img src={IconTrangChu} ></img></button>
        </div>
      </View>
      <View style={[styles.box, styles.box2]}>
        <div className="MidDS flex flex-row">
          <h1 className="pl-12"> Ngành Nghề </h1>
          <button className="BtnThemNganhNghe" onClick={ModalNganhNghe} > + Thêm Ngành Nghề </button>
        </div>
        <div> 
          <BangNghe/>
        </div>
      </View>
      <View >
        <div className="ModalTrangChuDS hidden " id="TrangChu">
          <img src={IconTrangChu} className="ModalTrangChuAvt"></img>
          <h1 className="ModalTrangChuName"> Nguyễn Văn A </h1>
          <button className="ModalTrangChuBtn "> Quản Lý Tài Khoản </button>
          <button className="ModalTrangChuDangXuat flex flex-row space-x-2 py-2 pl-2 border-t-2 " onClick={Logout}>
            <img src={logout}></img>
            <h1>Đăng Xuất</h1>
          </button>
        </div>
      </View>
      <View>
      <div id="ThemNghe" className="ModalThemNghe hidden">
          <div className="flex flex-row">
            <h1> Thêm Ngành Nghề </h1>
            <button className="BtnX" onClick={TatModalNganhNghe}> X </button>
          </div>
          <hr />
          <div className="flex flex-row">
            <div>
              <h1 className="t312"> Mã ngành nghề </h1>
              <input type="text" placeholder="Nhập mã" className="t313" onChange={NhapMaNganh} value={MaNganh}></input>
            </div>
            <div>
              <h1 className="t314"> *Ngành nghề </h1>
              <input type="text" placeholder="Nhập ngành nghề" className="t315" onChange={NhapTenNganh} value={TenNganh} ></input>
            </div>
          </div>
          <button className="t316"></button>
          <div>
            <button className="t317" onClick={TatModalNganhNghe}> Hủy </button></div>
          <div>
            <button className="t318" onClick={()=>{ThemNganhNghe()}} > Thêm </button></div>
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
    width: box_width,
    height: box_height
  },
  box1: {
    flex: 1,
    backgroundColor: "white"
  },
  box2: {
    flex: 1,
    backgroundColor: "white"
  },


});
