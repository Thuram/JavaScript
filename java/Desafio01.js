function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutes}`

    if (hora >= 0 && hora < 12){
        img.src =  '../fotosdesafio1/bom_dia.jpg'
        document.body.style.background = '#E7D636'
        document.body.style.color = '#25485C'
    } else if (hora >= 12 && hora < 18){
        img.src = '../fotosdesafio1/boa_tarde.png'
        document.body.style.background = '#F6B58E'
        document.body.style.color = '#ffffff'
    } else {
        img.src = '../fotosdesafio1/boa_noiite.jpg'
        document.body.style.background = '#25485C'
    }
}
