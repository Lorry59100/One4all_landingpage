console.log('working')

var btnPrevious = document.getElementById('btn-previous')
var btnNext = document.getElementById('btn-next')

var baleine = document.getElementById('baleine')
var environnement = document.getElementById('environnement')
var humanitaire = document.getElementById('humanitaire')
var ligue = document.getElementById('ligue')
var mlk = document.getElementById('mlk')
var reseau = document.getElementById('reseau')
var planet = document.getElementById('planet')
var ukraine = document.getElementById('ukraine')

i = 1;

btnPrevious.addEventListener('click', function() {
    if(i == 1) {
        i = 8
    } else {
        i--
    }
})

btnNext.addEventListener('click', function() {
    if(i == 8) {
        i = 1
    } else {
        i++
    }
})

window.addEventListener('click', function() {
    switch(i) {
        case 1 : 
        baleine.classList.remove('d-none')
        ukraine.classList.add('d-none')
        environnement.classList.add('d-none')
        break;
        case 2 : 
        environnement.classList.remove('d-none')
        baleine.classList.add('d-none')
        humanitaire.classList.add('d-none')
        break;
        case 3 : 
        humanitaire.classList.remove('d-none')
        environnement.classList.add('d-none')
        ligue.classList.add('d-none')
        break;
        case 4 : 
        ligue.classList.remove('d-none')
        mlk.classList.add('d-none')
        humanitaire.classList.add('d-none')
        break;
        case 5 : 
        mlk.classList.remove('d-none')
        reseau.classList.add('d-none')
        ligue.classList.add('d-none')
        break;
        case 6 : 
        reseau.classList.remove('d-none')
        planet.classList.add('d-none')
        mlk.classList.add('d-none')
        break;
        case 7 : 
        planet.classList.remove('d-none')
        ukraine.classList.add('d-none')
        reseau.classList.add('d-none')
        break;
        case 8 : 
        ukraine.classList.remove('d-none')
        planet.classList.add('d-none')
        baleine.classList.add('d-none')
        break;
    
    }
})

j = 1
var beyrouth = document.getElementById('img-beyrouth')
var italia = document.getElementById('img-italia')
var la = document.getElementById('img-la')
var tokyo = document.getElementById('img-tokyo')

function changeSlide() {
    if(j == 4) {
        j = 1
    } else {

        j++
    }
    switch(j) {
        case 1:
            beyrouth.classList.remove('d-none')
            tokyo.classList.add('d-none')
        break;
        case 2:
            italia.classList.remove('d-none')
            beyrouth.classList.add('d-none')
        break;
        case 3:
            la.classList.remove('d-none')
            italia.classList.add('d-none')
        break;
        case 4:
            tokyo.classList.remove('d-none')
            la.classList.add('d-none')
        break;
    }
}

window.onload = setInterval(changeSlide, 4000)

