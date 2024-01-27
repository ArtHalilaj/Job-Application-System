import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'


function Visitor() {


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

    
   
   
    
    // useEffect(()=> {
     
    //     axios.get('http://localhost:8081/get/Regjistro'+id)
    //     .then(res => setStudent(res.data))
    //     .catch(err => console.log(err));
    // })

    // useEffect( ()=>{
    //     const regjsitroTeDhenat= async()=>{
           
    //         axios.get("http://localhost:8081/get/Regjistro/"+email)  
            
         
    //      .then(res=>setStudent(res.data) )
    //      .catch(error=>console.log(error)); 

    //     }
    //     regjsitroTeDhenat();
    // },[email]);

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
    

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            window.location.reload();
            
        })
        .catch(err=>console.log(err))
    }

//   console.log(student)
    return (

        <div class='first'>
        <div style={{width:"40%",backgroundColor:"#042940"}} class='second'>
            <center>
            <h1 style={{color:"white",borderBottom:"2px solid white"}}>Profili im</h1>
            </center>
            <br>
            </br>
            <br></br>
            <table style={{padding:"10px",width:"100%"}} className='table'>
                 <thead>
                    
                     <tr style={{textAlign:"center",color:"white"}}>
                        <th>Emri :</th>
                         <th>Email :</th>
                         <th>Emri i Prindit :</th>
                         <th>Nr Kontaktues :</th>
                         <th>Datelindja :</th>
    
    
    
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
                                   
                                            </tr> 
    
    
                                  
    
                                        )) 
                                        } 
                                    </tbody>  
                                     </table> 

                                   
                                     
                                     </div>
                                     </div>
                                   
                             

  
    )
}

export default Visitor