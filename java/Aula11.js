//Orientação a objeto

let amigo = {nome:'josé',
sexo:'M',
peso:130.0,
engordar(p){
    console.log(`engordou`)
    this.peso += p
}}

amigo.engordar(2.7)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

