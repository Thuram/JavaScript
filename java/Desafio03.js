function contar(){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passos = document.getElementById('ipassos')
    var res = document.getElementById('contando')
    if (inicio.value.length == 0 || fim.value.length == 0 || inicio > passos){
        res.innerHTML = `Impossivel contar`
    }else{
        res.innerHTML = 'Contando '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c +=p){
            res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            for(let c = i; c >= f; c-=p ){
                res.innerHTML += `${c} \u{1F449}`
            } res.innerHTML += `\u{1F3C1}`
        }   
        

    }
}






/* function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados')
    } else {
        var fsexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../fotosdesafio2/menino_0.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
                
            } else if (idade <= 21) {
                img.setAttribute('src', '../fotosdesafio2/menino_1.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            } else if (idade < 50) {
                img.setAttribute('src', '../fotosdesafio2/homem_2.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            } else {
                img.setAttribute('src', '../fotosdesafio2/idoso_3.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            }

        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../fotosdesafio2/menina_0.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            } else if (idade <= 21) {
                img.setAttribute('src', '../fotosdesafio2/menina_1.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            } else if (idade < 50) {
                img.setAttribute('src', '../fotosdesafio2/mulher_2.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            } else {
                img.setAttribute('src', '../fotosdesafio2/idosa_3.jpg')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.width = '250px'
                img.style.height = '250px'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}


*/