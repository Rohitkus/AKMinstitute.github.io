

// var sc = document.getElementById("scrolling")
// window.onscroll=function rohit(){
//     if(document.documentElement.scrollTop>200){
//        sc.classList.add=("acrive")
//     }
//     else{
//         sc.classList.remove=("active")
//     } 
//     }

// console.log("rohit")

window.onscroll=function rohit(){
    if(document.documentElement.scrollTop>520){
        document.getElementById("scrolling").className="topit"
    }
    else{
        document.getElementById("scrolling").className="topit1"
        
    }
}