// Write your code here

const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

const random = Math.floor(Math.random()*100+1);

let arr = [];

for(let i = 0 ; i < 100; i++){
    for(let j = 0; j < 50; j++){
        if(i%j === 4 && i>j){
            arr = [...arr,[i,j]];
        }
    }
}

console.log(arr);

const num3 = 29;
const num4 = 5;

const mod = num3%num4;

//const max = Math.max(1,2,20,3);
//can't put array inside of this.
//But can do this... 

const array = [1,20,3];
const max = Math.max(...array);

console.log(max);

