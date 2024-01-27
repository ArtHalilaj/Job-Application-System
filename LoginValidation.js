function Validation(values) {

    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /^.{6,}$/;
    ///^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.email === "") {        
        error.email = "Emaili nuk duhet te jete i zbrazet*" }    
     else if(!email_pattern.test(values.email)) 
     {        error.email = "Emaili eshte shkruar gabim"    }
     else {        error.email = ""    }
    if(values.password === "") { 
        error.password = "Passwordi nuk duhet te jete i zbrazet*"    
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Passwordi eshte gabim*"  
     }     
     else {
     error.password = ""   
     }    
     return error;
    }

export default Validation;