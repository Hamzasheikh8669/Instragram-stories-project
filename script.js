let arr = [


{dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

{dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

{dp:"https://media.istockphoto.com/id/1496615631/photo/pensive-young-multiethnic-woman-looking-up-on-grey-wall.jpg?s=612x612&w=0&k=20&c=rxo93k3thtYNIc5djcNf_i_VoNP6NwBm3DrqRh2dDGo=",story:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

{dp:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",story:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},



]

// arr.forEach(function (elem,idx){
//     console.log(elem , idx)
// })


let storiyan = document.querySelector("#stories")
let clutter = ""
arr.forEach(function (elem,idx){
    clutter += ` <div class="story">
    <img  id="${idx}" src="${elem.dp}" alt="">
   </div>`
})

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function(dets){
  document.querySelector("#full_screen").style.display = "block"  
  document.querySelector("#full_screen").style.backgroundImage = `url(${arr[dets.target.id].story})`  

  setTimeout(function(){
    document.querySelector("#full_screen").style.display = "none " 
  },3000)
  
})
// console.log() //  dets means details dets.target means jis element ko apne target kra})
