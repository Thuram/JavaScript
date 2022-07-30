function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12){
        img.src =  '../fotosdesafio1/bom_dia.jpg'
        document.body.style.background = 'gray'
    } else if (hora >= 12 && hora < 18){
        img.src = '../fotosdesafio1/boa_tarde.png'
        document.body.style.background = 'orange'
    } else {
        img.src = '../fotosdesafio1/boa_noiite.jpg'
        document.body.style.background = 'darkblue'
    }
}
