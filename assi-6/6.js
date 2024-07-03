async function fetchdata(){
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result=await response.json();
    console.log(result);
}
fetchdata();