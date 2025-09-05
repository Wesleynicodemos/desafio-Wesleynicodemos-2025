class Abrigo {
  constructor() {
    this.animais = [];
  }

  adicionarAnimal(animal) {
    this.animais.push(animal);
  }
}

class Animal {
  constructor(nome, tipo, brinquedos) {
    this.nome = nome;
    this.tipo = tipo;
    this.brinquedos = brinquedos;
  }
}

const abrigo = new Abrigo();

abrigo.adicionarAnimal(new Animal("Rex", "cão", "RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Mimi", "gato", "BOLA, LASER" ));
abrigo.adicionarAnimal(new Animal("Fofo", "gato", "BOLA, RATO, LASER" ));
abrigo.adicionarAnimal(new Animal("Zero", "gato", "RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Bola", "cão", "CAIXA, NOVELO" ));
abrigo.adicionarAnimal(new Animal("Bebe", "cão", "LASER, RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Loco", "jabuti", "SKATE, RATO" ));

console.log(abrigo.animais)

class AbrigoAnimais {

  
  
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    abrigo.animais.forEach(animal=> {
      console.log(animal.brinquedos)
    });

    if(brinquedosPessoa1 == animal.brinquedos) {

    }
  }

}
export { AbrigoAnimais as AbrigoAnimais };
