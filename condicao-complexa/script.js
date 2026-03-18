let idade = Number(prompt("Insira a sua idade:"));
if (idade >=18){
    alert("Você é maior de idade")
} else {
    alert("Você é menor de idade")
}
let idade = Number(prompt("Insira a sua idade:"));
let temCNH = prompt ("Possui CNH? (Sim ou Não");

if ( idade >=18 && temCNH === "sim"){
    alert( "pode dirigir");
}else
    alert("Não pode dirigir");