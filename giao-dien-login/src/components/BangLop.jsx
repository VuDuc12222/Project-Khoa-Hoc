import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { instance } from "../utils/api";
import ReactPaginate from "react-paginate";

const BangLop = () => {

    const PER_Page = 15;

    const [currentPage, setCurrentPage] = useState(0);
    const [selected, setSelected] = useState({
        id: '',
        code: '',
        name: '',
    });

    function handlePageClick({ selected: selectedPage }) {
        console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_Page;
    console.log("offset", offset)

    const XoaNganhNghe = (id) => {
        instance({
            url: 'https://training.bks.center/api/class/' + id,
            method: 'DELETE',
        }).then(result => {
            alert('Xóa Thành Công ')
            console.log(result.data)
            setNumber(Number + 1)
        })
            .catch(error => {
                alert('Lỗi')
                console.log(error)
            })
    }

    const SuaNganhNghe = () => {
        instance({
            url: `https://training.bks.center/api/class/${selected.id}&course_id=${selected.course_id}&name=${selected.name}`,
            method: 'PUT',
        }).then(result => {
            CloseModalSua()
            getData()
            console.log('result.data', result.data)
        })
            .catch(error => {
                alert('Lỗi')
                console.log(error)
            })
    }

    const [DanhSachState, setDanhSachState] = useState([])
    const [Number, setNumber] = useState(0);

    useEffect(() => {
        getData()
    }, [Number])

    const getData = () => {
        axios({
            url: 'https://training.bks.center/api/class',
            method: 'get',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNDgxODg4ODg4ODg4ODg4IiwiaWF0IjoxNjc1MzQ1OTE1LCJpc3MiOiJBUEkiLCJhdWQiOiJBUEkiLCJleHAiOjE2Nzc5Mzc5MTV9.S83nYxU9J_u-E4xckjN7UpYtgvWyyYQzggFW-ip-o-I"
            }

        }).then(result => {
            console.log(result)
            setDanhSachState(result.data)
        })
    }

    const pageCount = Math.ceil(DanhSachState.length / PER_Page);

    const [TimTen, setTimTen] = useState('');

    const OpenModalSua = (item) => {
        setSelected(item)
        document.getElementById("SuaNghe").classList.remove("hidden")
    }

    const CloseModalSua = () => {
        document.getElementById("SuaNghe").classList.add("hidden")
    }

const handleChange = (value) => {
    setSelected({
        ...selected,
        [value.target.name]: value.target.value,
    })
}

    return (
        <Fragment>
            <div>
                <table className='w-full BangNganhNghe'>
                    <tr className='border'>
                        <th className='border '>Id</th>
                        <th className='border  '>Cài Đặt</th>
                        <th className='border '>Lớp</th>
                    </tr>
                    <tr className='border'>
                        <th className='border CotID ' colspan="2">Tìm kiếm</th>
                        <th className='border '><input type="text" placeholder="Tìm Lớp"
                            onChange={(event) => {
                                setTimTen(event.target.value)
                            }}></input></th>

                    </tr>
                    {DanhSachState
                        .filter((danhsach) => {
                            if (TimTen === "") {
                                return danhsach
                            } else if (danhsach.name.toLowerCase().includes(TimTen.toLocaleLowerCase())) {
                                return danhsach
                            }
                        })
                        .slice(offset, offset + PER_Page)
                        .map((danhsach, index) => (
                            <tr className='border' key={index}>
                                <th className='border CotID'>{ (currentPage * PER_Page) + (index + 1)}</th>
                                <th className='border CotCaiDat'>
                                    <button onClick={() => XoaNganhNghe(danhsach.id)}> Xóa </button>
                                    <button onClick={() => OpenModalSua(danhsach)}> Sửa </button>
                                </th>
                                <th className='border CotTenNganh'>{danhsach.name}</th>
                            </tr>
                        ))}

                </table>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
            <div className="ModalSua hidden" id="SuaNghe">
                <div className="flex flex-row">
                    <h1> Sửa Lớp </h1>
                    <button className="BtnX" onClick={CloseModalSua} > X </button>
                </div>
                <hr />
                <div className="flex flex-row">
                    <div>
                        <h1 className="t314"> Lớp </h1>
                        <input type="text" placeholder="Nhập Lớp" className="t315" value={selected.name} name="name"  onChange={(e) => handleChange(e)} ></input>
                    </div>
                </div>
                <button className="t316"></button>
                <div>
                    <button className="t317" onClick={CloseModalSua} > Hủy </button></div>
                <div>
                    <button className="t318" onClick={()=> SuaNganhNghe()} > Sửa </button></div>
            </div>

        </Fragment>
    )
}

export default BangLop;
