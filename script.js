const APIURl ="https://api.shrtco.de/v2/shorten?url="
const input = document.getElementById("inputlink")
const show1=document.getElementById("reqlink")
const cnt1=document.getElementById("cnt1")
const cnt2=document.getElementById("cnt2")
const cnt3=document.getElementById("cnt3")

const show= async ()=>{
  const response = await fetch(APIURl+input.value);
  const data= await response.json()

  console.log(data)
  if(data.ok!=true){
    alert("please enter a valid link ")
  }
  else{
    show1.style.display="flex"
    cnt1.innerHTML=`<div class="linkhead">Short Link 1 :</div> <div class="link"> ${data.result.short_link} </div> `;
    cnt2.innerHTML=`<div class="linkhead">Short Link 2 :</div> <div class="link">${data.result.short_link2} </div> `;

    cnt3.innerHTML=`<div class="linkhead">Short Link 3 :</div> <div class="link">${data.result.short_link3} </div> `;
    

  }
  
  // console.log(input.value)
  // input.value=""

}
function cloose(){

  show1.style.display="none"
  
}