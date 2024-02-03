import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function CreatePunen() {
    const [departamenti, setDepartamenti] = useState('') 
    const [profesioni, setProfesioni] = useState('') 
    const [idStud, setIdStud] = useState('') 
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createPunen',{departamenti, profesioni,idStud})
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
            <select value={departamenti} name='lenda' onChange={e => setDepartamenti(e.target.value)}>
            <option >Zgjedh Departamentin</option>
              <option value="Shkenca Kompjuterike dhe inxhinieri">Shkenca Kompjuterike dhe inxhinieri</option>
             <option value="Arkitektur">Arkitektur</option>
             <option value="Mekatronike">Mekatronike</option>
</select>
            </div> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Profesioni : </strong></label> 
            {/* <input type="email" placeholder='Enter Email' class="inp"
             onChange={e => setEmail(e.target.value)}/>  */}
              <select value={profesioni} name='emriProfesorit' onChange={e => setProfesioni(e.target.value)}>
              <option >Zgjedh Profesionin</option>
              <option value="Inxhinier Softuerik">Inxhinier Softuerik</option>
             <option value="Programer">Programer</option>
             <option value="Web">Web</option>
            <option value="Siguri Kibernetike">Siguri Kibernetike</option>
            <option value="UX designer">UX designer</option>
</select>
              </div>
              <br></br>
               <button  class="butoni">Publiko Punen</button>
               </form> 
               </div> 
               </div>  
               )}
export default CreatePunen