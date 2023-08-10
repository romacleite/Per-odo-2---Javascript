let meuPrimeiroArray = []
let meuSegundoArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let meuTerceiroArray = ["Joao", "Maria", "Jose", "Guilherme", "Arthur", "Uau"]

console.log(meuSegundoArray[4] + meuSegundoArray[8])

for( let x = 0; x <= meuSegundoArray.length; x++) {
    meuSegundoArray[x]

    console.log(x)
  
}

//

let frutas = ['maça', 'goiaba', 'abacaxi']
console.log(frutas)
frutas.push('maracuja') // add no fim do array
console.log(frutas)
frutas.unshift('melão') // add no início
console.log(frutas)
frutas.pop() // deleta o último elemento
console.log(frutas) 
frutas.shift() // deleta o primeiro elemento
console.log(frutas) 
frutas.splice(1, 1) // os params definem a posição que eu quero deletar e quantos elementos quero deletar a partir dessa posição respectivamente

