let TopAroop = document.getElementsByClassName("TopAroow")[0];
window.onscroll = () =>{
    if(window.scrollY >= 500){
        TopAroop.style = "display:block"
    }else{
        TopAroop.style = "display:none"
    }
}
TopAroop.addEventListener("click",() => {
    window.scrollTo(0,0 )
})
console.log