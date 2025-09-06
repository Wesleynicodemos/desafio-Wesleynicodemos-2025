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

abrigo.adicionarAnimal(new Animal("Rex", "cão", "RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Mimi", "gato", "BOLA, LASER" ));
abrigo.adicionarAnimal(new Animal("Fofo", "gato", "BOLA, RATO, LASER" ));
abrigo.adicionarAnimal(new Animal("Zero", "gato", "RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Bola", "cão", "CAIXA, NOVELO" ));
abrigo.adicionarAnimal(new Animal("Bebe", "cão", "LASER, RATO, BOLA" ));
abrigo.adicionarAnimal(new Animal("Loco", "jabuti", "SKATE, RATO" ));


console.log(abrigo)
class AbrigoAnimais {
  
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const posicoes = ordemAnimais.split("").reduce((acc,c,i) => {
      if (c === ",") {

        acc.push(i);

      }
      return acc;
    },[]) 

    let nome;
    let inicio = 0;
    let index; 

    const nomes = [];

    posicoes.forEach(i => {

      let indexTemp = i
      indexTemp > inicio 
      nome = ordemAnimais.substring(inicio,indexTemp);
      inicio = indexTemp+1
      
      nomes.push(nome)
      
      index = ordemAnimais.length+1
      nome = ordemAnimais.substring(inicio,index)

      nomes.push(nome)
    })

    console.log(nomes)

    for (let i= 0; i <= nomes.length; i++) {
      abrigo.getAnimais().forEach(animal=> {
      if(brinquedosPessoa1 == animal.getBrinquedos() && nomes[i] == animal.getNome()) {
        console.log("funcionou")
    }
    });
    }

 
  }

  

}
new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');

export { AbrigoAnimais as AbrigoAnimais };
