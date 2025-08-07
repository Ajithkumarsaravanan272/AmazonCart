import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(){
     const[keyword,setKeyword]=useState("");
     const navigate=useNavigate();
     const searchHandler=()=>{
         navigate("/search?keyword="+keyword)
     }

    return (
      <div className="input-group" style={{ marginLeft: "17px"}}>
        <input
          type="text"
          id="search_field"
          onChange={(e) => setKeyword(e.target.value)}
          className="form-control"
          onBlur={searchHandler}
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button
            onClick={searchHandler}
            id="search_btn"
            className="btn"
            style={{ padding: "11px",marginLeft:"-1px" }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
}
