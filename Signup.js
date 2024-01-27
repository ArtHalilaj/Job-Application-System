import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'



function Signup() {

    const [values,setValues]=useState({
        name:'',
        nameParent:'',
        nr:'',
        ditlindja:'',
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
        

        const requiredFields = ['name', 'nameParent', 'nr', 'ditlindja', 'email', 'password'];
  let hasEmptyField = false;

  for (const field of requiredFields) {
    if (!values[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'Nuk duhet te jete e zbrazet*',
      }));
      hasEmptyField = true;
    }
  }

  if (hasEmptyField) {
    // There are empty required fields, prevent form submission
    return;
  }






        axios.post('http://localhost:8081/signup',values)

            .then(res => {
                navigate('/login')
            })
            
        
    }


  return (
    <div class="first">
    <div class="second">
        <h2 class="titull">Register</h2>
        <br></br> 
        <form  onSubmit={handleSubmit}>
        <div class="all">
            <label htmlFor="name"><strong>Emri:</strong></label>
            <input type="text" placeholder='Shkruani Emrin' name='name' onChange={e => setValues({...values, name: e.target.value})} class="inp"></input>
            {errors.name && <span class="gabim">{errors.name}</span>}
            </div> 

            <div>
            <label htmlFor="nameParent"><strong>Emri Prindit:</strong></label>
            <input type="text" placeholder='Shkruani Emrin e Prindit' name='nameParent' onChange={e => setValues({...values, nameParent: e.target.value})} class="inp"></input>
            {errors.nameParent && <span class="gabim">{errors.nameParent}</span>}
            </div> 

            <br></br>

            <div>
            <label htmlFor="nr"><strong>Nr. i telefonit :</strong></label>
            <input type="text" placeholder='Shkruani Numrin' name='nr' onChange={e => setValues({...values, nr: e.target.value})} class="inp"></input>
            {errors.nr && <span class="gabim">{errors.nr}</span>}
            </div> 
            <br></br>
            <div>
            <label htmlFor="ditlindja"><strong>Datelindja :</strong></label>
            <input type="text" placeholder='Shkruani Datelindjen' name='ditlindja' onChange={e => setValues({...values, ditlindja: e.target.value})} class="inp"></input>
            {errors.ditlindja && <span class="gabim">{errors.ditlindja}</span>}
            </div> 
            <br></br>
            <div class="all">
            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" placeholder='Shkruani Emailin' name='email' onChange={e => setValues({...values, email: e.target.value})} class="inp"></input>
            {errors.email && <span class="gabim">{errors.email}</span>}
            </div> 

            <div class="all">
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password" placeholder='Shkruani Passwordin' name='password' onChange={e => setValues({...values, password: e.target.value})} class="inp"></input>
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

export default Signup