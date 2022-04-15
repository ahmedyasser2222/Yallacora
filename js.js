let mainMatches=document.getElementById("mainMatches")
console.log(mainMatches.scrollLeft)
let matches=document.getElementById("matches")
let rightScroll=document.getElementById("rightScroll")
let leftScroll =document.getElementById("leftScroll")


function left(){
   mainMatches.scrollLeft +=400
}
mainMatches.onscroll=()=>{
  if(!mainMatches.scrollLeft){
    leftScroll.style.backgroundColor="#C2D9E7"
  }else{
    leftScroll.style.backgroundColor="#1da1f2"
  }
  
}
function right(){
  mainMatches.scrollLeft -=400
  console.log()
  if(mainMatches.scrollLeft  <-1300 && window.innerWidth <500){rightScroll.style.backgroundColor="#C2D9E7" ;}
}
  
