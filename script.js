
function book(){
window.open("https://wa.me/919999999999?text=I want legal consultation","_blank");
}

function toggleChat(){
let box=document.getElementById("chatBox");
box.style.display=box.style.display=="block"?"none":"block";
}

function sendMessage(){

let input=document.getElementById("userInput");
let msg=input.value.toLowerCase();
let chat=document.getElementById("chatMessages");

chat.innerHTML+="<div><b>You:</b> "+msg+"</div>";

let reply="Please consult our lawyer for detailed advice.";

if(msg.includes("loan"))
reply="Loan settlement cases can be negotiated legally.";

if(msg.includes("land")||msg.includes("plot"))
reply="Land disputes require proper legal verification.";

if(msg.includes("marriage"))
reply="Marriage consultation includes divorce and custody issues.";

chat.innerHTML+="<div><b>AI:</b> "+reply+"</div>";

input.value="";
}
