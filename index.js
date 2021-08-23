let pessoa = {
     nome: "Maria",
     idade: 21,
     endereco: {
          logradouro: "Rua b",
          numero: 121
     }
}
console.log (
     `Me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e moro na rua ${pessoa.endereco['logradouro']} 
     número ${pessoa['endereco']['numero']}. `
)


/*
let pessoa = {
     nome: "João",
     idade: 17
}

console.log ("Me chamo " + pessoa.nome)
console.log ("Tenho " + pessoa['idade'] + ' anos.')


//Javascript Object Notation =JSON

*/


/*const triplo = (valor) => {
     console.log("Agora estamos calculando o triplo de " + valor)
     return 3 * valor
}
console.log (triplo(5))
*/



//const dobro = (valor) => valor * 2
//console.log (dobro (10))

//const hello = () => console.log("hello")
//hello()



//arrow function
//const dobro = n => n * 2
//console.log(dobro(2))



/*function dobro (n){
     return n * 2
}
*/



/*const triplo = function (n = 5){
     return n * 3
}
console.log (triplo(8))
console.log (triplo())
*/

/*const triplo = function (n){
     if (n !== undefined)
          return 3 * n

     return 3 *5 
     
}
*/
/*
function eAgora (f1, f2){
     return f1() * f1()
}

console.log(eAgora (function () {return 2 + 3 }, function () {return 2 * 3}))

*/

/*
const dobro = function (n) {
     return n * 2
}

const res = dobro (5)
console.log (res)
*/



/*


function soma (a, b){
     if (a === b){
          return a + b
     }
}

const resultado = soma (3, 3)
const resultado = soma (2, 3)

console.log(`resultado 1: ${resultado}. Resultado 2: ${resultado2}`)

*/





/*
function hello(){
      console.log('hello')
 }
hello ()

function hello(nome){
     console.log(`Hello, ${nome}`) //console.log("hello, " + nome)
}
hello ('José')
*/











// var linguagem = "Javascript"
// console.log ("Aprendendo " + linguagem)
// //variavel pode ser redeclarada
// var linguagem = "Java"
// console.log ('Aprendendo ' + linguagem)

// //declarando variáveis
// let a = 2
// let d
// let b = "abcd"
// a = 3

// //declarando constantes
// const nome = "José"
// const idade = 27
// const endereco = 'Rua K, 12'
// //nome = "Maria"
