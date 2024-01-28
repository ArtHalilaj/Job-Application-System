import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import Admin from './Admin'
import Visitor from './Visitor'
import './profile.css';

function Profili() {
    
    const[role,setRole]=useState('')
    const { email }= useParams()
    const navigate=useNavigate()
    const [student, setStudent] = useState([])

    // axios.defaults.withCredentials=true;
    // useEffect(()=>{
    //     axios.get('http://localhost:8081')
    //     .then(res=>{
    //         if(res.data.valid){
    //             setRole(res.data.role);
    //         } else{
    //             navigate('/login')
    //         }
    //     })
    //     .catch(err => console.log(err))
    // },[])

    useEffect(() => {
        fetch("http://localhost:8081/get/Regjistro/")
          .then(response => response.json())
          .then(data => {
            setStudent(data);
          })
          .catch(error => {
            // Handle errors
          });
      }, []);


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
        


    console.log(student)
    return (
        <div>
           
            {role=="admin" && <Admin/>}
            {role=="visitor" && <Visitor/>}
            
        </div>
    )
}



export default Profili