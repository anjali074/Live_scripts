//create object in marks
/*let  marks=[97, 82, 75, 85,65];
console.log(marks);
//length
console.log(marks.length);//properties*/

//create string in  Array
//let heroes=["Rahul", "Sita", "priya", "sipra"];
//console.log(heros);
//console.log(heros.length);
//all iteam peint use loop

//1. for loop
/*for(let idx=0; idx<heroes.length; idx++){
  console.log(heroes[idx]);
}

//forof
for(let hero of heroes){
  console.log(hero);
}*/
//print city
/*let cities=["Mumbai","Delhi", "Bangalore", "Hyderabad", "Chennai"];
for(let city of cities){
  console.log(city);
  console.log(city.length)
  console.log(city.toUpperCase());
}*/

// pratice q -1
/*let marks=[85, 97, 44, 37, 76, 60];//valriable
let sum=0;
//sum =marks[0]+marks[1]+marks[2];
//using loop
for(let val of marks){//loop
  sum+=val;//operator
}
let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);//string*/

//Que-2
//let items=[250, 645, 300, 900, 50];
/*let idx=0;
for(let val of items){
  console.log(`value at index. ${idx}= ${items[ idx]}`);
  let offer=val/10;
  items[idx]=items[idx]-offer;
  idx++;
  
}*/
/*for(let i=0; i<items.length; i++){
  let offer= items[i]/ 10;
  items[i]-=offer;


}
console.log(items);
*/

//Array method
//let foodItems=["potato", "apple", "litchi", "tomato"];
/*console.log(foodItems);
let addIteams=foodItems.push();//push
let deletdItems=foodItems.pop();//pop
foodItems.push("patato", "banana", "orange"); //add item to array
console.log(foodItems);*/

//console.log(foodItems);
//console.log(foodItems.toString()); //convert into string 

//use concat array

//let marvelHeroes=["thor", "spiderman", "iroman"];
/*let dcHeroes=["superman", "batman"];

let allHeroes=marvelHeroes.concat(dcHeroes);
console.log(allHeroes);*/

//unshift
/*let marvelHeroes=["thor", "spiderman", "iroman"];

let val=marvelHeroes.shift(); //remove first element and return it
console.log("deleted",val);*/

//slice
/*let marvelHeroes=["thor", "spiderman", "iroman", "Dr.Angla"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));*/

//splice
//let arr = [1,2, 3, 4, 5, 6,7];
//arr.splice(2,2, 101,102)
//Add element
//arr.splice(2,0,101)
//Deletd element
//arr.splice(2,1);
//Replace
//arr.splice(3,1,101);
//console.log(arr);

//pratice Q-1
 let Companies=["Bloomberge", "Microsoft", "Uber", "Google", "IBM","Ntflix"];
 //a.Companies.shift();//use shif
 //b.Companies.splice(2,1,"ola");
 //c. Companies.push("Amazon");



