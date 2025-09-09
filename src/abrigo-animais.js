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

abrigo.adicionarAnimal(new Animal("Rex", "cão", ["RATO","BOLA"] ));
abrigo.adicionarAnimal(new Animal("Mimi", "gato", ["BOLA","LASER"] ));
abrigo.adicionarAnimal(new Animal("Fofo", "gato", ["BOLA","RATO","LASER"] ));
abrigo.adicionarAnimal(new Animal("Zero", "gato", ["RATO","BOLA"] ));
abrigo.adicionarAnimal(new Animal("Bola", "cão", ["CAIXA","NOVELO"] ));
abrigo.adicionarAnimal(new Animal("Bebe", "cão", ["LASER","RATO","BOLA"] ));
abrigo.adicionarAnimal(new Animal("Loco", "jabuti", ["SKATE","RATO"] ));

class AbrigoAnimais {
  
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    const lista = [];
    
    let pessoa1 = conferir(brinquedosPessoa1, ordemAnimais, lista)
    let pessoa2 = conferir(brinquedosPessoa2, ordemAnimais, lista)

    let animaisPessoa1 = []
    let animaisPessoa2 = []
    
    if (pessoa1 && !pessoa2 && animaisPessoa1 < 3) {
      lista.push(`${pegarNome(brinquedosPessoa1, ordemAnimais)} - pessoa 1`)
      animaisPessoa1.push(`${pegarNome}`)
    } else if ( pessoa2 && !pessoa1 && animaisPessoa2 < 3) {
      animaisPessoa2.push(`${pegarNome}`)
      lista.push(`${pegarNome(brinquedosPessoa2, ordemAnimais)} - pessoa 2`)
    } else if (pessoa1 === pessoa2) {
      lista.push(`${pegarNome(brinquedosPessoa1, ordemAnimais)} - abrigo`)
    }
    
    lista.sort()
    console.log(lista)
    console.log(pessoa1)
    console.log(pessoa2)

  }

}

function conferir(brinquedosPessoa, nomesAnimais, lista) {
      const brinquedos = brinquedosPessoa.split(",")
      const nomes = nomesAnimais.split(",").sort();
      let index= 0

      for (const nome of nomes) {

        for(const animal of abrigo.getAnimais()) {

           for (let i= 0; i < animal.getBrinquedos().length;i++){
              
            if (brinquedos[index] === animal.getBrinquedos()[i] && nome === animal.getNome()){
               
                  index++
                  i = -1
                
              if (index === animal.getBrinquedos().length) {
                  index = 0
                  return true
              } 
            } 
          }
        }
      }
      return false
    }

    // pegar nome do animal

    function pegarNome(brinquedosPessoa, nomesAnimais) {
      const brinquedos = brinquedosPessoa.split(",")
      const nomes = nomesAnimais.split(",");
      let index= 0

      for (const nome of nomes) {
        for(const animal of abrigo.getAnimais()) {
          for (const brinquedo of brinquedos) {
            if (brinquedo === animal.getBrinquedos()[index] && nome === animal.getNome()){
              index++
            } 
            
            if (index === animal.getBrinquedos().length) {
                return animal.nome
            } 
          }
        }
      }
    }

new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

export { AbrigoAnimais as AbrigoAnimais };
