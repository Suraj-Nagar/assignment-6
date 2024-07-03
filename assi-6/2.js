function manipulatestrings(name){
    const result=name.toUpperCase();

function logstring(){
   return "The Manipulate string is:"+result;
}
return logstring;
}
const newresult=manipulatestrings("hello,world");
console.log(newresult());