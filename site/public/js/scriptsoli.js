var larg = 0
var comp = 0
function mostrarinfo() {
    larg = Number(ipt_largura.value);
    comp = Number(ipt_comprimento.value);
    infoid.style.display = "block"
    infoid.style.display = "flex"
    span_larg.innerHTML = `${larg}dasdasdsadasdas`
    span_comp.innerHTML = `${comp}`
    span_kits.innerHTML = `${qtdSensor}`
    span_valor.innerHTML = `${preco5.toFixed(2)}`
}
function fazersoli() {
    solicitador_id.style.display = "block"
    solicitador_id.style.display = "flex"
}
function reset() {
    ipt_comprimento.classList.remove("placeholderred")
    ipt_comprimento.style = `border: 2px solid none;`
    ipt_largura.classList.remove("placeholderred")
    ipt_largura.style = `border: 2px solid none;`
    div_resposta.innerHTML = ``
}
function simular() {
    larg = Number(ipt_largura.value);
    comp = Number(ipt_comprimento.value);
    var m2 = larg * comp;
    var sensor = 125;
    var preco = 2500;
    var qtdSensor = m2 / sensor;
    qtdSensor = Math.ceil(qtdSensor);
    reset()
    if (larg == `` || comp == ``) {
        div_resposta.innerHTML = `<b>Preencha todos os campos.</b>`
        ipt_largura.placeholder = `Campo obrigatório.`
        ipt_largura.style = `border: 2px solid red;`
        ipt_largura.classList.add("placeholderred")
        ipt_comprimento.placeholder = `Campo obrigatório.`
        ipt_comprimento.style = `border: 2px solid red;`
        ipt_comprimento.classList.add("placeholderred")
    }
    else if (m2 <= 125 && m2 > 0) {
        preco1 = preco;

        if (larg > 0 && larg > 10) {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco1.toFixed(2)}</b>.`
        }
        else {
            preco1 = preco;


            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco1.toFixed(2)}</b>.`
        }
    }
    else if (m2 > 125 && m2 <= 250) {

        preco2 = (preco * 0.9) * qtdSensor;

        if (larg > 0 && larg > 10) {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco2.toFixed(2)}</b>.`
        }
        else {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco2.toFixed(2)}</b>.`
        }
    }
    else if (m2 > 250 && m2 <= 375) {

        preco3 = (preco * 0.8) * qtdSensor;

        if (larg > 0 && larg > 10) {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco3.toFixed(2)}</b>.`
        }
        else {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco3.toFixed(2)}</b>.`
        }
    }
    else if (m2 > 375 && m2 <= 500) {

        preco4 = (preco * 0.7) * qtdSensor;

        if (larg > 10 && larg <= 20) {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco4.toFixed(2)}</b>.`
        }
        if (larg > 20) {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco4.toFixed(2)}</b>.`
        }
        else {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco4.toFixed(2)}</b>.`
        }
    }
    else if (m2 > 500) {

        preco5 = (preco * 0.65) * qtdSensor;

        if (larg > 10 && larg <= 20) {


            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco5.toFixed(2)}</b>.`
        }
        if (larg > 20) {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco5.toFixed(2)}</b>.`
        }
        else {

            div_resposta.innerHTML = `<br>A área da sua estufa é de <b>${m2} m²</b>, então serão necessários <b>${qtdSensor} kit(s) de sensor(es)</b>, com um custo total de <b>R$ ${preco5.toFixed(2)}</b>.`
        }
    }
}



