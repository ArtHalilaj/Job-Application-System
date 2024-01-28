// React.js frontend code for the profile page
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Profile = () => {
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate()
  const [student, setStudent] = useState([])

  const[role,setRole]=useState('')


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
 
  

  useEffect(() => {
    axios.get('http://localhost:8081/profile')  // Update the URL to point to your backend
      .then((response) => {
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8081/profile"+email)
      .then(response => response.json())
      .then(data => {
        setStudent(data);
      })
      .catch(error => {
        // Handle errors
      });
  }, []);

  
console.log(student)
  return (
    // <div>
    //   {email ? (
    //     <div>
    //       <h1>Welcome, {email}!</h1>
    //       {/* Display other user data as needed */}
    //     </div>
    //   ) : (
    //     <p>Loading profile data...</p>
    //   )}
    // </div>
    
    <div class='first'>
    <div style={{width:"40%",backgroundColor:"#234465"}} class='second'>
        <center>
        <h1 style={{color:"white",borderBottom:"2px solid white"}}>Mire se erdhe </h1>
        </center>
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                
                 <tr style={{textAlign:"center",color:"white"}}>
                    
                     <th>Email : </th>
                     



                         </tr>
                          </thead>
                          <tbody> 
                             
                              {Object.entries(student).map((data,i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i} > 

                                 
                                 <td>{email}</td> 
                                 
                               
                                        </tr> 


                              

                                    )) 
                                    } 
                                </tbody>  
                                 </table> 

                               
                                 
                                 </div>
                                 </div>
                               
                         


    
  );
};

export default Profile;
