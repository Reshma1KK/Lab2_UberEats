import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerOrder from "./CustomerOrder.js"
import Axios from "axios";
import {Row,Col} from "react-bootstrap"
import ReactPaginate from 'react-paginate';


function CustomerOrders() {

// (JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name) ? getCustomerData(order) : ""
    const [pageSize,setPageSize]=useState(0);
    console.log("pageSize",pageSize);
    const [posts,setPosts]=useState();
    const [loading,setLoading]=useState(false);
    //set the page numbers
    const [pageNumber,setPageNumber]=useState(0);

    //data diplayed per page
    const [dataPerPage,setDataPerPage] = useState(5) ;

      useEffect(() => {
        getAllCustomerData();
      },[]);

      const getAllCustomerData = () =>{
      Axios.defaults.headers.common.authorization=localStorage.getItem("token");
        setLoading(true);
        Axios.get("http://13.56.184.154:3001/CustomerFilter")
        .then((response) => {
           // if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
             const allCustomerData = response.data.data;
                          setPosts(allCustomerData);
                          setLoading(false);
         }).catch(error =>
          console.error(error)
        )
      }

      console.log(posts);

      //pages visited so far eg: page:4 and data per page:5 => We have visited 20 pages.
      const pagesVisited = pageNumber*dataPerPage;

      //Create PageCount
      const pageCount = Math.ceil(posts.length/dataPerPage);

      //Change the Page-> Make the page number equal to next page
      const changePage = ({selected}) => {
        setPageNumber(selected)
      };

      //deciding which page to show will depend on eg: pagesVisited is 4 so next data to be displayed should start at page 5 and go on until 9
      const displayData = posts.slice(pagesVisited,pagesVisited+dataPerPage)

      .map(order => {
        return(<Col sm={12} md={12} lg={12} key={order.id}>
          <CustomerOrder order={order} loading={loading} />
        </Col>
      )
      })

      console.log("displayData",displayData)
      return (
        <Fragment>
         <Row>
         <div>
             <select
             className="form-value"
             name="pages"
             style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"1400px",color:"white",backgroundColor:"black",marginBottom:"1.5rem"}}
               onChange={
                 (e) =>{
                   setDataPerPage(e.target.value)
                 }
               }
             >
               <option>Page Size</option>
               <option value="2">Page Size:2</option>
               <option value="5">Page Size:5</option>
               <option value="10">Page Size:10</option>
             </select>
         </div>
            {displayData}
          <div style={{textAlign:"center",color:"#89B5AF"}}>
            <ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={dataPerPage}
         onPageChange={changePage}
         containerClassName={"paginationButtons"}
         previousLinkClassName={"previousButton"}
         nextLinkClassName={"nextButton"}
         disabledClassName={"disabledButton"}
         activeClassName={"activeButton"}
         />
         </div>
        </Row>
      </Fragment>
          )



}

export default CustomerOrders
