import axios from 'axios'
import React, { useEffect, useState,useParams } from 'react'
import { Link,useNavigate } from 'react-router-dom'


function Admin() {

    const { email } = useParams();
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
        fetch("http://localhost:8081/get/Regjistro/"+email)
          .then(response => response.json())
          .then(data => {
            setStudent(data);
          })
          .catch(error => {
            // Handle errors
          });
      }, []);
    

      const handleDelete = async (email) => { 
        try { 
         await axios.delete('http://localhost:8081/get/Regjistro/'+email)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }

//   console.log(student)
    return (

        <div class='first'>
        <div style={{width:"40%",backgroundColor:"#042940"}} class='second'>
    
            <br>
            </br>
            <br></br>
            <table style={{padding:"10px",width:"100%"}} className='table'>
                 <thead>
                     <tr style={{textAlign:"center",color:"white"}}>
                        <th>Emri</th>
                         <th>Email</th>
                         <th>Emri i Prindit</th>
                         <th>Nr Kontaktues</th>
                         <th>Datelindja</th>
    
    
    
                             </tr>
                              </thead>
                              <tbody> 
                                 
                                  {Object.entries(student).map((data,i)=> ( 
                                     <tr style={{textAlign:"center",color:"white"}} key={i} > 

                                     <td>{data[1][0].name}</td>
                                     <td>{data[1][0].email}</td> 
                                     <td>{data[1][0].nameParent}</td>
                                     <td>{data[1][0].nr}</td> 
                                     <td>{data[1][0].ditlindja}</td>
    
                                    <td>
                                    <Link style={{width:"30%",backgroundColor:"#24a0ed",color:"white",border:"1px solid #24a0ed "}} to={`update/get/Regjistro/${data.email}`} class='butoni'>Update </Link>&nbsp;


            <button style={{width:"40%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.email)}>Delete</button>

                                    </td>
    
    
                                            </tr> 
    
    
                                  
    
                                        )) 
                                        } 
                                    </tbody>  
                                     </table> 

                                   
                                     
                                     </div>
                                     </div>
                                   
                             

  
    )
}

export default Admin