alert('Dia de feira! Faça suas compras!');

melancia = prompt('Melância a 10 reais', 'Digite sim para comprar');

maca = prompt('Maça a 2 reais', 'Digite sim para comprar');

banana = prompt('Cacho de bananas a 5 reais', 'Digite sim para comprar');

let total = 0;

function valor() {
    if (melancia == 'sim' || maca == 'Sim' || maca == 'SIM') {
        total = total + 10;
    }
    
    if (maca == 'sim' || maca == 'Sim' || maca == 'SIM') {
        total = total + 2;
    }
    
    if (banana == 'sim' || banana == 'Sim' || banana == "SIM") {
        total = total + 5;
    }
    
    return total
}

alert("O total das suas compras é: " + valor());
