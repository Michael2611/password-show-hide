const input = document.querySelector("input");
const mostrar = document.querySelector("span i");

const ina = document.getElementById("pass");

ina.addEventListener("keyup", function(){
    let cadena = ina.value;
    ina.value = cadena.split(" ").join("");
});


mostrar.addEventListener("click", function(){
    if(input.type === "password"){
        input.type = "text";
        mostrar.classList.add("ocultar");
    }else{
        input.type = "password";
        mostrar.classList.remove("ocultar");
      }
});