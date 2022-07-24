const id = document.getElementsByClassName('advice-card-id')[0];
const txt = document.getElementsByClassName('advice-card-text')[0];
const button = document.getElementsByClassName('advice-card-dice')[0];
function addText(text){
    txt.textContent=`"${text}"`
}
function addId(idd){
    id.textContent=`${idd}`;
}
function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice',{cache:"no-cache"}).then(res=>res.json()).then(data=>{
        addText(data.slip.advice)
        addId(data.slip.id)
    }).catch(err=>{
        addText(err)
    })
}


button.addEventListener('click',()=>{
    button.disabled = true
    setTimeout(()=>{
        button.removeAttribute('disabled')
        fetchAdvice()
    },2000)
})