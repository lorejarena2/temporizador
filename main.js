const button = document.getElementById("button");
button.addEventListener("click", function() {
const num1=document.getElementById('este');
resultado=parseInt(num1.value);
console.log(resultado)
cuentaRegresiva(resultado)
})


 function cuentaRegresiva(cuenta){
     if(cuenta==0){
         document.getElementById("temporizador").innerText='finish'
         document.getElementById("este").value = "";
         console.log(resultado)
         
     }else{
         document.getElementById("temporizador").innerText=cuenta
         setTimeout(cuentaRegresiva,1000,cuenta-1)
     }
 }


