import React, { useState, useEffect, Fragment } from "react";
import ".././script.css"
import Home from ".././imagine/Home.png";

function ToChucDetail() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
    return (
        <Fragment>
            <img src={Home} className="Avatar"></img>
            <div className="InputAnh">
                {avatar && (<img className="night" src={avatar.preview} alt="" />)}
            </div>
            <input type="file" className="InputButton" onChange={handlePreviewAvatar} />
            <div className="c507"> Tên Trường </div>
            <input className="c508" value=" Trường Đại Học A " type="text" />
            <h1 className="c509"> Thông Tin Trường</h1>
            <div className="c510"> Email </div>
            <input className="c511" value=" abc@gmail.com " type="text" />
            <div className="c512"> Số điện thoại </div>
            <input className="c513" value=" 0901123657 " type="text" />
            <div className="c514"> Địa chỉ  </div>
            <input className="c515" value=" Địa chỉ A " type="text" />
            <div className="c516"> Mã số thuế </div>
            <input className="c517" value=" PM123 " type="text" />
            <div className="c518"> Website </div>
            <input className="c519" value=" http://abc.vn " type="text" />
            <button className="c520"></button>
            <button className="c521 hover:bg-blue-400 hover:text-white "> Cập Nhật </button>
        </Fragment>
    )
}

export default ToChucDetail;