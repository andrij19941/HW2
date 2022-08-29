let nNumber = parseInt (prompt (("Введіть число N")));
console.log(nNumber)

while (!nNumber) {
    alert("Це не цифра");
    alert ("Введіть цифру");  
  
break
 }
let mNumber = parseInt (prompt (("Введіть друге число M")));
console.log(mNumber)
while (!mNumber) {
alert("Це не цифра");
alert ("Введіть цифру");
break
  }
let booleanChoise = confirm  (("Пропускати парні числа?"));
console.log ( booleanChoise );  
let result =0.
for (i = nNumber; i <= mNumber; i++) {
  if (booleanChoise === true) 
    {
        result += i++;
    } 
    
    else (booleanChoise === false) 
    {
        result += i;
    }
}
console.log(result)
