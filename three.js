let a=parseInt(prompt("enter the value to check"));
const arr=[1,2,3 ,4,5,6,7,8,101,50,20,200,5978,67];


const result=arr.includes(a);
if(result==true){
    
alert(`The value is Found :${a}`)
}else
alert(`The value :${a} is not Found`)
