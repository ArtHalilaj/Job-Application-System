import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'



function ProfiliIm() {

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''

    })

    const navigate = useNavigate();

    const [errors,setErrors]=useState({})

    const handleInput = (event)=>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.name==="" && err.email === "" && err.password === ""){
            axios.post('http://localhost:8081/signup',values)
            .then(res => {
                navigate('/login')
            })
            
        } 
    }

  return (
    <div class="first">
    <div class="second">
        <h2 class="titull">Profili Im</h2>
        <br></br> 
        <form action="" onSubmit={handleSubmit}>
        <div class="all">
            <label htmlFor="name"><strong>Name:</strong></label>
            <input type="name" placeholder='Enter Name' name='name' onChange={handleInput} class="inp"></input>
            {errors.name && <span class="gabim">{errors.name}</span>}
            </div> 
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

            <button type='submit' class="butoni"><strong> Sign Up </strong></button>
            
            
            <br></br> 
            <br></br>           
             <center>
            <p>If you are registred you can log in</p>
            </center>
            <br></br>
            <Link to="/login" class="butoni2">Log in</Link>
        </form>
    </div>
    </div>
  )
}

export default ProfiliIm