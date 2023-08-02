const entrada = prompt('bomba relógio! digite um número de 1 a 10:')
console.log(entrada)

if((!entrada) || (entrada <= 0) || (entrada >= 11)) {
    alert("isso não é um número de 1 a 10")
}

else {
    alert(entrada + "!")

    for(let i=1; i<=10; i++) {
        let regressao = entrada - i
        if(regressao > 0) {
            alert(regressao + "!")
        } else {continue};

    }
    alert("BOOM!")

}