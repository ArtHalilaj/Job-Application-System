import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import microsoft from './mircrosoft.png'
import google from './google-logo.png'
import facebook from './facebook.png'






function PunedhenesitUser() {
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
    
    <div style={{display:"flex",justifyContent:"space-around"}}>
          <div className="card">
             <img className='card-image' src={microsoft} alt="Microsoft" />
            <div className="card-content">
                <br></br>
                <center>
              <h2>{"Microsoft "}</h2>
              </center>
              <br></br>
              <p>{"Microsoft Corporation është një korporatë teknologjike shumëkombëshe amerikane me seli në Redmond, Uashington. Produktet softuerike më të njohura të Microsoft janë linja Windows "}</p>
              <br></br>
              <div className="card-buttons">
              <a className='Aja' href='/aplikoPerPune'>Apliko</a>
              <a className='Aja' href='/https://www.microsoft.com/en-us/'>Visito</a>
              </div>
            </div>
          </div>

          <div className="card">
             <img className='card-image' src={google} alt="Google" />
            <div className="card-content">
                <br></br>
                <center>
              <h2>{"Google "}</h2>
              </center>
              <br></br>
              <p>{"Google LLC është një kompani shumëkombëshe amerikane e teknologjisë që fokusohet në inteligjencën artificiale, reklamat online, teknologjinë e motorëve të kërkimit, cloud computing, softuerin kompjuterik, informatikën kuantike"}</p>
              <br></br>
              <div className="card-buttons">
              <a className='Aja' href='/aplikoPerPune'>Apliko</a>
              <a className='Aja' href='/'>Visito</a>
              </div>
            </div>
          </div>


          <div className="card">
             <img className='card-image' src={facebook} alt="Microsoft" />
            <div className="card-content">
                <br></br>
                <center>
              <h2>{"Facebook "}</h2>
              </center>
              <br></br>
              <p>{"Facebook është një shërbim i mediave sociale dhe rrjeteve sociale në pronësi të konglomeratit amerikan të teknologjisë Meta Platforms. Krijuar në vitin 2004 nga Mark Zuckerberg me katër studentë të tjerë të Harvard College"}</p>
              <br></br>
              <div className="card-buttons">
              <a className='Aja' href='/aplikoPerPune'>Apliko</a>
              <a className='Aja' href='/'>Visito</a>
              </div>
            </div>
          </div>

          </div>
                                     )}
export default PunedhenesitUser