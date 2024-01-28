import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function CreatePunen() {
    const [lenda, setLenda] = useState('') 
    const [emriProfesorit, setEmriProfesorit] = useState('') 
    const [idStud, setIdStud] = useState('') 
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createPunen',{lenda, emriProfesorit,idStud})
          .then(res => {
            console.log(res);
            navigate('/publikoPunen'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Publiko Pune :</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Numri Personal i juaj : </strong></label> 
            <input type="idStud" placeholder='Enter your ID' class="inp"
             onChange={e => setIdStud(e.target.value)}/> 
              </div>
              <br></br>
            <div className='mb-2'> 
            <label htmlFor=""> <strong> Departamenti : </strong></label> 
            {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
            <select value={lenda} name='lenda' onChange={e => setLenda(e.target.value)}>
            <option >Zgjedh Departamentin</option>
              <option value="Lab 1">Shkenca Kompjuterike dhe inxhinier</option>
             <option value="Algoritme">Arkitektur</option>
             <option value="Shkenca Kompjuterike 2">Mekatronike</option>
</select>
            </div> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Profesioni : </strong></label> 
            {/* <input type="email" placeholder='Enter Email' class="inp"
             onChange={e => setEmail(e.target.value)}/>  */}
              <select value={emriProfesorit} name='emriProfesorit' onChange={e => setEmriProfesorit(e.target.value)}>
              <option >Zgjedh Profesorin</option>
              <option value="Lab 1">Inxhinier Softuerik</option>
             <option value="Algoritme">Programer</option>
             <option value="Shkenca Kompjuterike 2">Web</option>
            <option value="Inxhinieri Softuerike">Siguri Kibernetike</option>
            <option value="Rrjeta Kompjuterike">UX designer</option>
</select>
              </div>
              <br></br>
               <button  class="butoni">Publiko Punen</button>
               </form> 
               </div> 
               </div>  
               )}
export default CreatePunen