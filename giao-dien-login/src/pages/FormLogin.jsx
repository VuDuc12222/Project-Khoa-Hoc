import React from "react";
import Imagine1 from ".././imagine/Imagine1.png";
import { StyleSheet, View, Dimensions } from "react-native";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

var { width } = Dimensions.get("window");
var { height } = Dimensions.get("window");
var box_count = 2;
var box_width = width / box_count;
var box_height = height;

export default function FormLogin() {

  const [username, setUserName]  = useState('')
  const [password, setPassword] = useState('')

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

   const handleApi = () => {
     console.log({ username,password})
     axios({
      method: "post",
      url:'https://training.bks.center/api/auth/login',
      params:{
        username: username,
        password: password
      },
     }).then(result => {
       console.log(result.data)
       alert('Login success ')
         window.location.href = '/MidPage'
         //window.localStorage.getItem("token")
         localStorage.setItem('token', result.data.token)
     })
       .catch(error => {
         alert('Lỗi')
         console.log(error)
       })
   }
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
      <label>
        <h1 className="h1"> Quản lý đồ án </h1>
        <div className="login"> Đăng nhập </div>
        <div className="account"> Tài Khoản </div>
        <input className="account_place" placeholder=" Tài Khoản " type="text" value={username} onChange={handleUserName} />
        <div className="password"> Mật Khẩu</div>
        <input className="password_place" placeholder=" Mật Khẩu " type="text" value={password} onChange={handlePassword} />
        <button className="btn" onClick={()=>{
          handleApi()
          }} > Đăng Nhập  </button>
        </label>
      </View>
      <View style={[styles.box, styles.box2]}>
        <img src= {Imagine1} />      
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
    flex: 4,
    backgroundColor: "white"
  },
  box2: {
    flex: 5,
    backgroundColor: "white"
  }
});


