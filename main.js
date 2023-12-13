let contenitoreContatti = document.querySelector('#contenitoreContatti');
let mostraContattiBtn = document.querySelector('#mostraContattiBtn');
const rubrica = {
    contatti : [
        {nome : 'Leonardo', numero : 333334444555},
        {nome : 'Giulio', numero : 333363555},
        {nome : 'Alessio', numero : 33333464555},
        {nome : 'Caterina', numero : 3332356555},
    ],
    mostraContatti : function(){
        this.contatti.forEach((contatto)=>{
            let cardContatto = document.createElement('div');
            cardContatto.classList.add('background-accent', 'p-5', 'col-custom');
            cardContatto.innerHTML = `
            <h5>${contatto.nome}</h5>
            <p>${contatto.numero}</p>
            `;
            contenitoreContatti.appendChild(cardContatto);
        })
    },
}

            // <article class=" background-accent p-5 col-custom ">
            //     <h5>Leonardo</h5>
            //     <p>3356262728</p>
            // </article>

let check = false;
mostraContattiBtn.addEventListener('click', ()=>{
    if(!check){
        contenitoreContatti.innerHTML = "";
        rubrica.mostraContatti();
        check = true;
        mostraContattiBtn.innerHTML = 'Nascondi contatti';
    }else{
        contenitoreContatti.innerHTML = "";
        check = false;
        mostraContattiBtn.innerHTML = 'Mostra contatti';
    }
});