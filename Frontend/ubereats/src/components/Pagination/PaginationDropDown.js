import React,{useState} from 'react'

 function Pagination({dataPerPage,totalPosts}){

   const [pageSize,setPageSize]=useState([]);

   // console.log("dropdown",pageSize)

    return (
      <div>
          <select
          className="form-value"
          name="pages"
          style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"1400px",color:"white",backgroundColor:"black",marginBottom:"1.5rem"}}
            onChange={
              (e) =>{
                setPageSize(e.target.value)
              }
            }
          >
            <option value="select">Page Size</option >
            <option value="2">Page Size:2</option>
            <option value="5">Page Size:5</option>
            <option value="10">Page Size:10</option>
          </select>
      </div>
    )
}

export default Pagination;
