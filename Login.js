import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import './App.css';
import e from 'cors';





function Login() {
    const [values,setValues]=useState({
        email:'',
        password:'',

    })

    const navigate = useNavigate();

    const [errors,setErrors]=useState({})

    const [backendError, setBackendError] = useState([])

    const [userId, setUserId] = useState(null);

    const handleInput = (event)=>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }
    axios.defaults.withCredentials = true;

    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(res =>{
            if(res.data.valid){
                navigate('/')
            }else{
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    } , []) 
     
    const handleSubmit=(event)=>{
        event.preventDefault();
        const err = Validation(values); 
        setErrors(err);        
            if(err.email === "" && err.password === ""){
                axios.post('http://localhost:8081/login',values)
                .then(res => { 
                    if(res.data.errors) { 
                    setBackendError(res.data.errors); 
                    } else { 
                        setBackendError([]);
                        if(res.data === "Success") {
                            navigate('/about'); 
                            setUserId(res.data.userId);  
                            
                            } else {  
                              navigate('/about/get/Regjistro/'+values.email);
                              }  
                              } 
                              }) 
                               .catch(err => console.log(err));
                            }    
    }
    

    return (



        // <div class='first'>
        // <div style={{width:"40%",backgroundColor:"#042940"}} class='second'>
        //     <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/create" class='butoni'>Shto Studentin +</Link>
        //     <br>
        //     </br>
        //     <br></br>
        //     <table style={{padding:"10px",width:"100%"}} className='table'>
        //          <thead>
        //              <tr style={{textAlign:"center",color:"white"}}>
        //                 <th>Emri</th>   
        //                  <th>Email</th>   
        //                    <th>Action</th>    
        //                      </tr>   
        //                       </thead>  
        //                       <tbody> 
        //                          { 
        //                           student.map((data, i)=> ( 
        //                              <tr style={{textAlign:"center",color:"white"}} key={i}> 
        //                               <td>{data.Name}</td>
        //                                <td>{data.Email}</td> 
        //                                <td> 
    
        //                                <Link style={{width:"30%",backgroundColor:"#24a0ed",color:"white",border:"1px solid #24a0ed "}} to={`update/${data.ID}`} class='butoni'>Update </Link>&nbsp;
    
    
        //                                <button style={{width:"40%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.ID)}>Delete</button>
        //                                </td>
        //                                 </tr> 
        //                           )) 
        //                                 } 
        //                                 </tbody>  
        //                                  </table> 
        //                                  </div>
        //                                  </div>  
        //                                  )}



        <div class="first" >
        <div  class="second" >
            <form action="" onSubmit={handleSubmit}>
                <div class="all">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} class="inp"></input>
                {errors.email && <span class="gabim">{errors.email}</span>}
                </div> 
                <div class="all">
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} class="inp"></input>
                {errors.password && <span class="gabim">{errors.password}</span>}
                </div> 

                <button  type='submit' class="butoni">Log in</button>
                <center>
                    <br></br>
                <p>Don't have an account? REGISTER HERE!</p>
                <br></br>
                </center>
                <Link to="/signup" class="butoni2">Register</Link>
            </form>
        </div>
        </div>
    )
}

export default Login