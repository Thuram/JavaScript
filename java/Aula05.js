var horas = new Date()
var minu = new Date()
var horass = minu.getMinutes()
var hora = horas.getHours()
console.log(`Agora são exatamente ${hora} : ${horass} Hrs`)
if (hora >=7 && hora <= 12){
   console.log('Bom Dia')
} else if (hora >= 12 && hora <= 18){ 
   console.log('Boa Tarde')
} else if (hora >= 19 && hora <= 24){
   console.log('Boa Noite')
} else if (hora <6 ){
   console.log('Boa Madrugada')
}
