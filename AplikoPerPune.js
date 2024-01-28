import axios from 'axios';

import React, { useEffect, useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'


  function AplikoPerPune() {
    const [regjistrosemestrin, setRegjistroSemestrin] = useState([])

    const [idStudent, setIdStudent] = useState('') 
      const [lokacioni, setLokacioni] = useState('') 
      const [semestri, setSemestri] = useState('') 
      const [orari, setOrari] = useState('') 
      const navigate = useNavigate();

     
    
          const[role,setRole]=useState('')
       
      function handleSubmit(event) {
          event.preventDefault(); 
            axios.post('http://localhost:8081/createSemestri',{lokacioni,semestri,orari,idStudent})
            .then(res => {
              console.log(res);
              navigate('/aplikoPerPune'); 
          }).catch(err => console.log(err));

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
      
          useEffect(()=> {
              axios.get('http://localhost:8081/aplikoPerPune')
              .then(res => setRegjistroSemestrin(res.data))
               .catch(err => console.log(err)); 
               },[])
      
          const handleDelete = async (id) => { 
              try { 
               await axios.delete('http://localhost:8081/aplikoPerPune/'+id)
               window.location.reload() 
              }catch(err) {  
               console.log(err);   
              }   
           
      }  

    

      return (
      <div class='first' style={{color:"white"}}>
          <div class='second' style={{backgroundColor:"#234465",border:"2px solid #234465"}}> 
          <form onSubmit={handleSubmit}>
              <h2>Apliko per pune  :</h2> 
              <br></br>
            
              <div className='mb-2'> 
              <label htmlFor=""><strong> Shenoni numrin tuaj personal : </strong></label> 
              <br></br>
              <br></br>
              <input type="idStudent" placeholder='Enter your ID' class="inp"
              onChange={e => setIdStudent(e.target.value)}/> 
                </div>
                <br></br>
              <div className='mb-2'> 
              <label htmlFor=""> <strong> Lokacioni : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <select value={lokacioni} name='lenda' onChange={e => setLokacioni(e.target.value)}>
              <option >Zgjedh Lokacionin</option>
                <option value="Prishtine">Prishtine</option>
              <option value="Ferizaj">Ferizaj</option>
              <option value="Gjilan">Gjilan</option>
              <option value="Peje">Peje</option>
              <option value="Prizren">Prizren</option>
              
  </select>
            
                </div>
                <div className='mb-2'> 
              <label htmlFor=""> <strong> Departamenti : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <select value={semestri} name='lenda' onChange={e => setSemestri(e.target.value)}>
              <option >Zgjedh Departamentin</option>
              <option value="Lab 1">Shkenca Kompjuterike dhe inxhinier</option>
             <option value="Algoritme">Arkitektur</option>
             <option value="Shkenca Kompjuterike 2">Mekatronike</option>
              
  </select>
            
                </div>
              
                <div className='mb-2'> 
              <label htmlFor=""> <strong> Orari : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <select value={orari} name='lenda' onChange={e => setOrari(e.target.value)}>
              <option >Zgjedh Orarin</option>
                <option value="Paradite">Paradite</option>
              <option value="Pasdite">Pasdite</option>
            
              
  </select>
            
                </div>
                <div className='mb-2'> 
              <label htmlFor=""> <strong> CV e juaj : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <input style={{padding:"20px"}} type="file" />

                </div>



                <br></br>
                <button  onClick={() => {
    window.location.reload();
  }}  class="butoni">Apliko Per Pune</button>
                </form> 
                </div> 


                <div style={{width:"40%",backgroundColor:"#234465",border:"2px solid #234465"}} class='second'>
        {/* <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/create" class='butoni'>Shto Studentin +</Link> */}
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Lokacioni</th>   
                     <th>Departamenti</th>   
                       <th>Orari</th>    
                       <th>Action</th>   
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              regjistrosemestrin.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.lokacioni}</td>
                                   <td>{data.semestri}</td> 
                                   <td>{data.orari}</td> 
                                   <td> 

                                   <button style={{width:"100%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.id)}>Anulo Aplikimin</button>
                                   </td>
                                    </tr> 
                              )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>



                </div>  


            
                                      
                                      


                )}

                
  export default AplikoPerPune