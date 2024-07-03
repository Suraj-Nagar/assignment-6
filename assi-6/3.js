function ageInDays(person){
          let full_name=person.first_name.concat(" ",person.Last_name);
          let age_in_days=person.age*365;
         

function logvalue(){
    console.log(`The person's full name is [${full_name}] and their age in days is [${age_in_days}].`)
}
return logvalue;
}
 const person={
        first_name:"sam",
        Last_name:"bahadur",
        age:20,
};
const result=ageInDays(person);
result();


