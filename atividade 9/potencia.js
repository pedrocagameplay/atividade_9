var num1 = Number(prompt("insira um número"))
var num2 = Number(prompt("insira o expoente da potência"))
const total = potencia(num1,num2)

function potencia (num1,num2){
   return num1 ** num2
}
if(num1 == " " || num2 == " "){
    alert("Preencha os espaços vagos")
}
else{
    alert(total)
}