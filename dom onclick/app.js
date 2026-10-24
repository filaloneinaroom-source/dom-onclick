// const click=document.querySelector(`#click`)
// const add=document.querySelector(`#add`)

// click.addEventListener(`click`, function(){
//     console.log("test");
    
// })

// add.onclick=()=>{
//     console.log("add");
    
// }

const btns=document.querySelectorAll(`button`)
console.log(btns);

btns[0].onclick=()=>{
window.document.body.style.backgroundColor="green"
}
btns[1].onclick=()=>{
window.document.body.style.backgroundColor="yellow"
}
btns[2].onclick=()=>{
window.document.body.style.backgroundColor="blue"
}
