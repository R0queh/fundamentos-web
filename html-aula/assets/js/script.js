/*
var - escopo global
let - escopo local
const - escopo global e constante pois não muda
ecmaScript - é a versão oficial do java script
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por class: getElementsbyClassName()
por seletor: querySelector()

*/ 

let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk =false
let emailOk =false
let assuntoOk =false

let mapa = document.querySelector('#mapa')
let btn = document.querySelector('#btn')

nome.style.width='100%'
email.style.width='100%'

//como chamar uma function sem nome

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido.'
        txt.style.color ='red'
        nomeOk = false
    }else{
        txt.innerHTML = 'Nome válido.'
        txt.style.color ='green'
        nomeOk =true
    }
}


function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk=false
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk =true
    }

}


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caractéres'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display ='block'
        assuntoOk=false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk =true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso !')
    }else{
        alert('preencha o formulário corretamente antes de enviar.')
    }
}

function ligarBtn(){
    if(nomeOk == true && emailOk == true && assuntoOk == true && assunto.value.length >3){
        btn.style.visibility = 'visible'
    }else{
        btn.style.visibility = 'hidden'
    }
}


function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}