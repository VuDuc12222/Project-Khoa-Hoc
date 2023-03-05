import React, { Fragment } from "react";
import LeftBar from ".././components/LeftBar";
import TopBar from "../components/TopBar";



export default function MainPage() {
  return (
    <Fragment>
      <div className="flex flex-row h-full max-w-full " >
        <label className=" border-r-2">
          <LeftBar />
        </label>
        <label  >
          <TopBar />
        </label>
      </div>
    </Fragment>


  );
}

