function Validation(values) {

    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /^.{6,}$/;


    if(values.name === "") {
        error.name = "Emri nuk duhet te jete i zbrazet*"    
    }     
    else {
     error.name = ""  
    }

    if(values.nameParent === "") {
        error.nameParent = "Emri i Prindit nuk duhet te jete i zbrazet*"    
    }  else {
     error.nameParent = " "  
    }

    if(values.nr === "") {
        error.nr = "Numri nuk duhet te jete i zbrazet*"    
    } else {
     error.nr = " "  
    }

    if(values.ditlindja === "") {
        error.ditlindja = "Datelindja nuk duhet te jete i zbrazet*"    
    } else {
     error.ditlindja = " "  
    }

    if(values.email === "") {
     error.email = "Emaili nuk duhet te jete i zbrazet*" 
    }     
    else if(!email_pattern.test(values.email)) {
     error.email = "Emaili nuk eshte ne rregull*"    }
     else {
        error.email = ""  
    }

    if(values.password === "") {
         error.password = "Passwordi nuk duhet te jete i zbrazet*" 
        }     
    else if(!password_pattern.test(values.password)) { 
        error.password = "Passwordi nuk eshte i njejti*"    
    }
     else {
         error.password = "" 
        }  
    
    return error;

}

export default Validation;