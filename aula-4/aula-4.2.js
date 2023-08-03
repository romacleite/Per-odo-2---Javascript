let n1 = prompt('Verificador de Números Primos', 'Digite o número que quer verificar aqui');

function verificar(n1) {
    
    if (n1 < 0) {
        return("Não é possível verificar se esse número é primo") 
    }
    
    else if (n1 == 0 || n1 == 1 || n1 == 2) {
       return("Esse número não é primo")
    }
    
    else {
        for(let i = 2; i < (n1); i++) {
            if (n1 % i === 0) {
                return("Esse número não é primo")
            }

            else {
                return("Esse número é primo")
            }
        }
    }
}

alert(verificar(n1));

