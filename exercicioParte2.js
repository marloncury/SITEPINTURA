/* transformar notas escolares
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F 

let nota = prompt("Insira a nota:");

function trocaNota(nota){

    let notaA =  nota >= 90 && nota <=100
    let notaB =  nota >= 80 && nota < 90
    let notaC =  nota >=70 && nota <80
    let notaD =  nota >= 60 && nota <70
    let notaF =  nota<60 && nota>=0
    
    
    if(notaA){
        console.log("A")
    }

    else if(notaB){
        console.log("B")
    }

    else if(notaC){
        console.log("C")
    }

    else if(notaD){
        console.log("D")
    }

    else if(notaF){
        console.log("F")
    }

    else{
        console.log("Nota Inválida")
    }

}

trocaNota(nota);

*/


/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */

let despesasTotal ={
    receitas: [20000, 300, 400, 500.80],
    despesas: [300, 433, 232.23, 2323]
}

function sum(array){

    let total = 0;
    for (let valor of array){
        total += valor;
    }
    return total;

}

function balanca(){
    const totalReceitas = sum(despesasTotal.receitas)
    const totalDespesas = sum(despesasTotal.despesas)
    let total = 0
    total = totalReceitas - totalDespesas;
    let message = "negativo";
    if (total>=0){
        message = "positivo";
    }
    console.log(`seu saldo é ${message} com um total de:  ${total.toFixed(3)} reais`)
}

balanca();