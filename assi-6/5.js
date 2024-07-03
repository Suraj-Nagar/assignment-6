const prompt=require("prompt-sync")(); 
function takeinput(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Hello,${name}`);
        },2000)
    })
}
const namee=prompt("Enter name:");
let x=takeinput(namee)
console.log(x);


