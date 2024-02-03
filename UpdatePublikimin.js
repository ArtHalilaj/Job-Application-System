import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';



function UpdatePublikimin() {
    const [departamenti, setDepartamenti] = useState('')
    const [profesioni, setProfesioni] = useState('') 
    const {idPublikimi} = useParams();
    const navigate = useNavigate();
    const [udepartamenti , setDep] = useState(departamenti)
    const [uProfesioni , setProf] = useState(profesioni)

    

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+idPublikimi,{ departamenti, profesioni,idPublikimi}) 
        .then(res => { 
             console.log(res); 
             navigate('/publikoPunen'); 
             }).catch(err => console.log(err));
             } 
             
             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Paraqitjen e Provimit</h2> 
                        <br></br>
                        <div class="all">  
                       
                         <label htmlFor=""><strong>Lenda :</strong></label>  
                           {/* <input type="text"   placeholder='Enter Name' class="inp"   
                                 onChange={e => setName(e.target.value)} />  */}
                 <select value={departamenti} name='departamenti' onChange={e => setDepartamenti(e.target.value)}>
                 <option >Zgjedh Departamentin</option>
              <option value="Shkenca Kompjuterike dhe inxhinieri">Shkenca Kompjuterike dhe inxhinieri</option>
             <option value="Arkitektur">Arkitektur</option>
             <option value="Mekatronike">Mekatronike</option>
                 </select>
                                  </div>  
                                   <div class="all"> 
                                   <label htmlFor=""><strong>Email :</strong></label> 
                                   {/* <input type="email" placeholder='Enter Email' class="inp"   onChange={e => setEmail(e.target.value)}/> */}
                      <select value={profesioni} name='profesioni' onChange={e => setProfesioni(e.target.value)}>
                      <option >Zgjedh Profesionin</option>
              <option value="Inxhinier Softuerik">Inxhinier Softuerik</option>
             <option value="Programer">Programer</option>
             <option value="Web">Web</option>
            <option value="Siguri Kibernetike">Siguri Kibernetike</option>
            <option value="UX designer">UX designer</option>
                    </select>
                                   </div>                
                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default UpdatePublikimin