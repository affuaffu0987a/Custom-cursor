let moveCusrsor=document.getElementsByClassName("cursor")
let Con=document.querySelector(".container")

Con.addEventListener("mousemove",(eve)=>{
    moveCusrsor[0].style.left = eve.x+"px"
    moveCusrsor[0].style.top = eve.y+"px"
})