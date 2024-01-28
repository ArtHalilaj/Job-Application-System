import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link, useNavigate,Navigate, useParams } from 'react-router-dom'


function Logout() {
    const navigate=useNavigate()
    const[role,setRole]=useState('')

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
          navigate('/login')
            window.location.reload();
            
        })
        .catch(err=>console.log(err))
    }

    axios.defaults.withCredentials=true;
  useEffect(()=>{
      axios.get('http://localhost:8081')
      .then(res=>{
          if(res.data.valid){
              setRole(res.data.role);
          } else{
              navigate('/login')
          }
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div >
        <button style={{marginTop:"320px",backgroundColor:"#ff5858"}} onClick={handleLogout}>Log Out</button>  
    </div>
  )
}

export default Logout