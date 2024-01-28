import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import ProvimiStudent from './PublikoPuneUser'
import ProvimiAdmin from './PublikoPuneAdmin'
import PerzgjedhjaAdmin from './Punedhenesit'
import PerzgjedhjaStudent from './PunedhenesitUser'
import PunedhenesitUser from './PunedhenesitUser'
import Punedhenesit from './Punedhenesit'







function PunedhenesitH() {
    const [perzgjedhjagrupit, setPerzgjedhjagrupit] = useState([])
    
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
        axios.get('http://localhost:8081/perzgjedhjagrupit')
        .then(res => setPerzgjedhjagrupit(res.data))
         .catch(err => console.log(err)); 
         },[])

    const handleDelete = async (idG) => { 
        try { 
         await axios.delete('http://localhost:8081/perzgjedhjagrupit/'+idG)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }
     return (
    
        <div style={{alignItems:"center",justifyContent:"center", height: "100%"}}>
           
           {role=="admin" && <Punedhenesit/>}
            {role=="visitor" && <PunedhenesitUser/>}
        </div>
        
        )}
export default PunedhenesitH