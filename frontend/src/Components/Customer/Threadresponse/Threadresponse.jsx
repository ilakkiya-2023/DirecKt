import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  toast } from 'react-toastify';

const Threadresponse = () => {

    const [data, setData] = useState([]);
    const [email,setemail]=useState("");

    useEffect(()=>{
        try{
          const fetch = async()=>{
        const userdata = JSON.parse(localStorage.getItem('customerLogin'));
        console.log(userdata.email);
        setemail(userdata.email);
          }
        fetch();
      }
        catch(err){
          console.log(err);
        }
      
    },[]);

    const fetchData = async (e) => {
        e.preventDefault();
        const formdata={
          email:email
        }

      try {
      
        const response = await axios.post('http://localhost:5000/customer/getreplydata',formdata);
        console.log(response.data)
        setData(response.data.result);
        console.log(data)
   
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    function orderconfirm(){
      toast.success("Order Confirmed")
    }

  return (
    <>
    <center>
      <button onClick={fetchData} style={{border:"0", backgroundColor:"white"}}>Refresh <i class="fa fa-refresh"></i></button><br></br><br></br>
      <div>Refresh to get the Latest Responses</div><br></br><hr></hr>
    </center><br></br><br></br>
    
    <h2 style={{textAlign:"center"}}>Latest Responses</h2><br></br>
    <div className="container d-flex">
    {/* {
      data.map((el)=>{
        return (
          <>
            <div className="card" style={{width: "18rem",marginRight:"20px"}}>
              <div className="card-body">
                <h5 className="card-title">{el.loginuser_id.businessname}</h5>
                <p className="card-text">delivery Status: {el.deliverystatus}<br></br>replymessage : {el.replymessage}</p>
               <a href="#" className="btn btn-success" onClick={orderconfirm}>Confirm Order</a>
              </div>
            </div>
          </>
        )
      })
    } */}
    { <div>
      {data.map((item, index) => (
        <div key={index}>
          
          
          <p>Image: {item.image}</p>
          <p>Heading: {item.heading}</p>
          <p>Bill: {item.bill}</p>
          <p>Category: {item.category}</p>
          <div>
            <p>Threads Reply:</p>
            {item.threadsreply.map((reply, replyIndex) => (
              <div key={replyIndex}>
                <p>Business name: {reply.loginuser_id.businessname}</p>
                <p>Delivery Status: {reply.deliverystatus.toString()}</p>
                <p>Reply Message: {reply.replymessage}</p>
                <p>Deal: {reply.deal.toString()}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>}
    </div>
    </>
  )
}

export default Threadresponse;  