let TheBTn = document.getElementsByClassName("BTNJS");
TheBTn[0].addEventListener("click",() => {
    window.scrollTo(0,500)
})
TheBTn[1].addEventListener("click",() => {
    window.scrollTo(0,900)
})
let TopAroop = document.getElementsByClassName("TopAroow")[0];
window.onscroll = () =>{
    if(window.scrollY >= 400){
        TopAroop.style = "display:block"
    }else{
        TopAroop.style = "display:none"
    }
}
TopAroop.addEventListener("click",() => {
    window.scrollTo(0,0 )
})