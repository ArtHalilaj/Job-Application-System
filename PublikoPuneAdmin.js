import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'







function PublikoPuneAdmin() {
    const [paraqitProvimin, setParaqitProvimin] = useState([])
    
    const[role,setRole]=useState('')
    const navigate=useNavigate()

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

    useEffect(()=> {
        axios.get('http://localhost:8081/publikoPunen')
        .then(res => setParaqitProvimin(res.data))
         .catch(err => console.log(err)); 
         },[])

    const handleDelete = async (idProvimi) => { 
        try { 
         await axios.delete('http://localhost:8081/publikoPunen/'+idProvimi)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }
  return (
    
  <div class='first'>
    <div style={{width:"40%",backgroundColor:"#234465"}} class='second'>
        <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/createPunen" class='butoni'>Publiko Pune +</Link>
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Departamenti:</th>   
                     <th>Profesioni:</th>  
                     <th>Kerkesat:</th>   
                       <th>Action:</th>    
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              paraqitProvimin.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.lenda}</td>
                                   <td>{data.emriProfesorit}</td> 
                                   <td>{data.nota}</td> 
                                   <td> 

                                   <Link style={{width:"30%",backgroundColor:"#24a0ed",color:"white",border:"1px solid #24a0ed "}} to={`update/${data.idProvimi}`} class='butoni'>Update </Link>&nbsp;


                                   <button style={{width:"40%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.idProvimi)}>Delete</button>
                                   </td>
                                    </tr> 
                              )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>
                                     </div>  
                                     )}
export default PublikoPuneAdmin