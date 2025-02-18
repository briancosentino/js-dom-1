/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
 */
const button = document.querySelector('button')
const handleClickButton = button.addEventListener('click', function (){
    const lampImg = document.querySelector('img')
    if (lampImg.src.includes('yellow_lamp.png')){
        lampImg.src = './img 4/white_lamp.png'
    } else if (lampImg.src.includes('white_lamp.png')){
        lampImg.src = './img 4/yellow_lamp.png'
    }
})