import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUniversity
}from "react-icons/fa";
import{HiUserGroup} from  "react-icons/hi";
import{MdSchedule,MdGroupAdd} from  "react-icons/md";
import {BiLogOut} from "react-icons/bi";
import { NavLink } from 'react-router-dom';





const Sidebar = ({children}) => {
    const [student, setStudent] = useState([])
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/login",
            name:"Login/Signup",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Profili im",
            icon:<FaUserAlt/>
        },
        {
            path:"/punedhenesit",
            name:"Ballina",
            icon:<HiUserGroup/>
        },
        {
            path:"/aplikoPerPune",
            name:"Apliko Per Pune",
            icon:<FaUniversity/>
        },
        {
            path:"/publikoPunen",
            name:"Publiko Pune",
            icon:<MdSchedule/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<BiLogOut/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "310px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">-Welcome-</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{margin:"0"}}>{children}</main>
        </div>
    );
};

export default Sidebar;