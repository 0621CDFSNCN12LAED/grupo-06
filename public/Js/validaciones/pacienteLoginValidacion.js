
//Como en la invocacion del script uso DEFER, estoy seguro que el script ya se cargó    
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const formulario = document.querySelector("form");

//Dejo el cursor posicionado en el primer campo a cargar
emailInput.focus();

const inputsRequeridos = [
    emailInput, passwordInput 
];

formulario.addEventListener("submit", (event)=>{

    if(formEsInvalido()){
        console.log("formulario invalido");
        event.preventDefault();
    } else {
        event.preventDefault();
        console.log("todo ok, se enviaria el form");
    }
            
});

function formEsInvalido(){
    let error = false;

    //Recorro cada uno de los campos requeridos para ir evaluando si fueron bien ingresados, caso contrario se lo muestra como inválido
    for (const input of inputsRequeridos) {  
        if(estaVacio(emailInput)){
            input.classList.add("campo-invalido");
            console.log(input);
            return true;
        } else {
            input.classList.remove("campo-invalido");
            input.classList.add("campo-valido");
        }        
    }
    
    return error;
}

function estaVacio(field){
    return field.value.trim() == "";
}
