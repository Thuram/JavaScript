function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h</p>`

    if (vel > 60) {
        res.innerHTML += '<p>Voce está <strong>MULTADO</strong> por excesso de velocidade!</p>'
    } else{
        res.innerHTML += '<p>Dirija sempre com sinto de segurança</p>'
    }

}
