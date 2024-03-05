const touch=[...document.querySelectorAll('.btn')];
const listeDeKeyCode=touch.map(touche=>touche.dataset.key);
const ecran=document.querySelector('.ecran');

document.addEventListener('keydown',(e)=>{
    const valeur= e.keyCode.toString();
    calculer(valeur);


})

document.addEventListener('click',(e)=>{
    const valeur=e.target.dataset.key;
    calculer(valeur)

})

const calculer=(valeur)=>{
    if(listeDeKeyCode.includes(valeur)){
        switch(valeur){
            case'8':
      ecran.textContent="";   
        break;
            case'13':
        const calcul=eval(ecran.textContent);
        ecran.textContent=calcul;
        break;
        default:   
const indexKeycode=listeDeKeyCode.indexOf(valeur);
const touche=touch[indexKeycode];
ecran.textContent +=touche.innerHTML;  
       }
    }
}

window.addEventListener('error',(e)=>{
    alert('Attention le calcule est erroner, veuillez ressayez svp')
})
