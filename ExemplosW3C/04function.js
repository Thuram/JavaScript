function sum (y, x){
    return x + y
}
let c = sum(25, 52)

console.log(`A soma dos valores é ${c} podemos chamar a função de duas formas diferentes, atribuindo a uma função e chamando ela`)

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // person ==> this

  
  //No exemplo acima, thisrefere-se ao objeto pessoa .

//IE this.firstName significa a propriedade firstName deste .

//IE this.firstName significa a propriedade firstName de pessoa .

let text = 'Gustavo Thuram'
let tamanho = text.length
console.log(`O tamanho da string "${text}" tem ${tamanho}`)

let sli = text.slice(0, 7)
console.log(sli) //slice da string text

let rep = text.replace('Gustavo', 'Nascimento')
console.log(rep)


