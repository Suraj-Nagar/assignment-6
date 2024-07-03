async function fetchdata(){
    const response1=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result1=await response1.json();
    console.log(result1);
}
fetchdata();