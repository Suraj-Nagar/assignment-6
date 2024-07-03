async function fetchdata(){
    try{
    const response1=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const response2=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result1=await response1.json();
    const result2=await response2.json();
  
    const combine={
        todo : result1,
        post : result2
    }
    console.log(combine);

}catch(error){
    console.log("handled",error);
}
}
fetchdata();