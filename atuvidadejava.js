//1-
let numero = prompt('Dos números de 0 a 5. Em qual estou pensando?')
if (numero == 4){
console.log ('Venceu')
alert ('Venceu')
    console.log ('Perdeu')
    alert ('Perdeu')
}

//2-
let vel = prompt('Coloque a velocidade do carro');

if (vel > 80){
    let multa = (vel - 80)*5;
    alert(`Você está acima do limite. A multa é de ${multa}`);
}else{
    alert('Você está dentro do limite');
}

//3-
let num = prompt('Digite o número');
if (num %2 == 0){
    alert ('Par')
}else{
    alert ('Ímpar')
}


//4-
let salario = parseInt(prompt('Qual é o seu salário'));

if (salario > 1250){
    let aumento = (salario * 10/100) + salario;
    alert (aumento)
} else{
    let aumento2 = (salario * 15/100) + salario;
    alert(aumento2);
}
