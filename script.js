const txtElm=document.getElementById("txtElm")
const txt="My name is Akshay Thakur and I am learning javaScript. ";
const container=document.getElementById("container")


let index=0;

function writeText(){
    txtElm.innerHTML=txt.slice(0,index);
    index++;
}

function showImg(){
    container.classList.add("active")
    container.innerHTML=`<img src="./image.JPG" alt="">`
}

setInterval(writeText,100)

setTimeout(()=>{
    showImg()
},4000)