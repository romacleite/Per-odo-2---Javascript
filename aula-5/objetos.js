// criando um objeto na mão
let pessoa = {nome: "rodrigo", idade: 30, cpf: "123.456.789-01"}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cpf);

// criando um objeto usando uma função

function quadrado(lado, cor) {
    this.lado = lado;
    this.cor = cor;
    this.area = function () { return this.lado * this.lado}
}

let quadrado1 = new quadrado(4, "vermelho");
let quadrado2 = new quadrado(2, "PRETO");

//por ser uma função dentro de um objeto, dependendo dele e de suas características, é categorizada como: MÉTODO
console.log(quadrado1.area());

//in para descobrir se uma propriedade existe ou não:
console.log("lado" in quadrado1);
console.log("telhado" in quadrado1);

for (let prop in quadrado1) {
    console.log(prop)
}


// criando um objeto a partir de uma classe

class retangulo{
    constructor(lado, altura, cor){
        this.lado = lado;
        this.altura = altura;
        this.cor = cor;
    }
    area() {
        return this.lado * this.altura;
    }
}

let retangulo1 = new retangulo(2, 10, "verde");

console.log(retangulo1.area())