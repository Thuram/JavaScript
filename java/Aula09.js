let vetor = [1, 2, 3, 4, 5]
vetor[5] = 6
vetor[6] = 7 // cria elemento com posição variavel
vetor.push(9) // cria um elemento na ultima posição 
vetor.sort()
//length tamanho da array            



for (let pos = 0;pos <= vetor.length;pos++){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
    
}

for (let po in vetor){
    console.log(vetor[po])
}


let localização = vetor.indexOf(7) // função localização

console.log(`O valor ${vetor[localização]} esta na posição ${localização}`) // vetor[localização] traz o elemento
//posição de numero pesquisado dentro da array













