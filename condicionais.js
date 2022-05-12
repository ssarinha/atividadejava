//Se o carro tiver mais que 15 anos de uso, é velho, se não, é novo.

//let idadeCarro = 15;
//if (idadeCarro > 5){
//    console.log ('O seu carro é velho')
//}else{
//    console.log('O seu carro é novo')
//}

//Quando o usuário escrever o seu nome, o console deve trazer uma resposta como: seu nome é bonito, caso seja verdade, se não, é feio.

let nome = 'sara';
if (nome < 'larissa'){
    console.log ('O nome é bonito')
}else{
    console.log ('O nome é feio')
}

prompt('Escreva o seu nome')

let numero = prompt('Dos números de 0 a 5. Em qual estou pensando?')
if (numero == 4){
console.log ('Você  acertou, parabéns!')
alert ('Você  acertou, parabéns!')
}else{
    console.log ('Você errou, que penaa :(')
    alert ('Você errou, que penaa :(')
}

//html
let notaHTML= parseInt  (prompt('Nota HTML'))
let notaCSS=  parseInt (prompt('Nota CSS'))
let notaJS=   parseInt (prompt ('Nota JS'))

let media = (notaHTML + notaCSS + notaJS)/3 
alert(media)

if (media >= '10'){
    alert ('Aprovado')    
}else{
    alert  ('Reprovado')
}



