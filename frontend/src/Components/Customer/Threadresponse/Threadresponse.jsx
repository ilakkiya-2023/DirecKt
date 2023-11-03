import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  toast } from 'react-toastify';

const Threadresponse = () => {

    const [data, setData] = useState([]);
    const [thread_id,setThread_id]=useState("");

    useEffect(()=>{
        try{
        const userdata = JSON.parse(localStorage.getItem('currentThreadId'));
        console.log(userdata.thread._id);
        setThread_id(userdata.thread._id);
      }
        catch(err){
          console.log(err);
        }
    },[]);

    const fetchData = async (e) => {
        e.preventDefault();
      
      try {
        console.log(thread_id);
        const response = await axios.post(`http://localhost:5000/customer/getreplydata?threads_id=${thread_id}`);
        setData(response.data.thread.threadsreply);
        console.log(data);
        
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
    {
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
    }
    </div>
    </>
  )
}

export default Threadresponse;  