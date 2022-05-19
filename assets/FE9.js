var str1 = prompt("შეიყვანე თანხა",1000);
var strprc = prompt ("შეიყვანეთ პროცენტი",10)

var sum = parseInt( str1);
var percent = parseInt (strprc);

var result = sum + sum *percent/100;

alert ("დაანგარიშების შემდეგ ტანხა იქნება" +result)




var mas =[
["გიორგი","საბა", "mariami","sofo","alexander"],["1","2","3","4","5"], 
["თვის","წლის","საუკუნის","ათწლეულის","დეკადის"],
["არ არის","გახდება","არის","შეიძლება გახდეს","იყო"],
]; 


var Name;
var Number;
var Date;
var Proper;


Name= mas [0] [1];
Number =mas [1] [3];
Date =mas [2] [1];
Proper = mas [3] [2];

alert ( Name + Number + Date + Proper)
