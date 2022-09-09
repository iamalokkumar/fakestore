

var url="https://fakestoreapi.com/products"

fetch(url)
.then((res)=>{
   return res.json()
}).then((res)=>{
    let data=res
    console.log(data)
    myFun(data)
})
.catch((err)=>{
    console.log(err)
})

let myFun=(data)=>{
   

data.map((elem)=>{
    let div=document.createElement("div")
    div.innerText=elem.title


    document.getElementById("container").append(div)
})


}

