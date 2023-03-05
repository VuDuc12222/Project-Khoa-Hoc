import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { instance } from "../utils/api";
import ReactPaginate from "react-paginate";


export default function DanhSachQuanTri() {

    return (
        <Fragment>
            <div class="big relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w450 text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                STT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Họ và Tên
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Địa chỉ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Giới tính
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày sinh
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td class="px-6 py-4">
                                Vũ Hoa Đức
                            </td>
                            <td class="px-6 py-4">
                                0123456789
                            </td>
                            <td class="px-6 py-4">
                                abc@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hà Nội</a>
                            </td>
                            <td class="px-6 py-4">
                                Nam
                            </td>
                            <td class="px-6 py-4">
                                1/1/2000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </Fragment>
    )
}