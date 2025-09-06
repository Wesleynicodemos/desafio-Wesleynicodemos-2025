class Abrigo {
  constructor() {
    this.animais = [];
  }

  adicionarAnimal(animal) {
    this.animais.push(animal);
  }

  getAnimais() {
    return this.animais;
  }
}

class Animal {
  constructor(nome, tipo, brinquedos) {
    this.nome = nome;
    this.tipo = tipo;
    this.brinquedos = brinquedos;
  }

  getNome() {
    return this.nome
  }

  getBrinquedos() {
    return this.brinquedos
  }

}

const abrigo = new Abrigo();

abrigo.adicionarAnimal(new Animal("Rex", "cão", "RATO,BOLA" ));
abrigo.adicionarAnimal(new Animal("Mimi", "gato", "BOLA,LASER" ));
abrigo.adicionarAnimal(new Animal("Fofo", "gato", "BOLA,RATO,LASER" ));
abrigo.adicionarAnimal(new Animal("Zero", "gato", "RATO,BOLA" ));
abrigo.adicionarAnimal(new Animal("Bola", "cão", "CAIXA,NOVELO" ));
abrigo.adicionarAnimal(new Animal("Bebe", "cão", "LASER,RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Loco", "jabuti", "SKATE,RATO" ));


console.log(abrigo)

const animal = new Animal();
class AbrigoAnimais {
  
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const posicoes = ordemAnimais.split("").reduce((acc,c,i) => {
      if (c === ",") {

        acc.push(i);

      }
      return acc;
    },[]) 

    const nomes = ordemAnimais.split(",");

    const lista = [];

    for (const nome of nomes) {
      for(const animal of abrigo.getAnimais()) {
        if (brinquedosPessoa1 === animal.getBrinquedos() && nome === animal.getNome()){
          lista.push(`${nome} - Pessoa 1`)
          break
        } else if (brinquedosPessoa2 === animal.getBrinquedos() && nome === animal.getNome()) {
          lista.push(`${nome} - Pessoa 2`)
          break
        } else {
          lista.push(`${nome} - abrigo`)
          break
        }
      }
    }
    lista.sort()

  console.log(lista)
  console.log(nomes.length)
 
  }

  

}
new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');

export { AbrigoAnimais as AbrigoAnimais };
