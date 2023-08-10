alert('Dia de action figure! Faça suas compras!');

naruto = prompt('Naruto a 100 reais', 'Digite sim para comprar');

darth = prompt('Darth Vader a 120 reais', 'Digite sim para comprar');

harry = prompt('Harry Potter a 150 reais', 'Digite sim para comprar');

let total = 0;

function valor() {
    if (naruto == 'sim' || naruto == 'Sim' || naruto == 'SIM') {
        total = total + 100;
    }
    
    if (darth == 'sim' || darth == 'Sim' || darth == 'SIM') {
        total = total + 120;
    }
    
    if (harry == 'sim' || harry == 'Sim' || harry == "SIM") {
        total = total + 150;
    }
    
    return total
}

class recibo{
    constructor(prod1, prod2, prod3){
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }
}

let recibo1 = new recibo(naruto, darth, harry);
console.log(recibo1)

alert("O total das suas compras é: " + valor());

alert("Aqui seu recibo de compras hoje: Naruto (" + recibo1.prod1 + ") | Darth Vader (" + recibo1.prod2 + ") | Harry (" + recibo1.prod3 + ")");

