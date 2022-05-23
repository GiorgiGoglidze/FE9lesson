var str1 = prompt("ხელფსი",7500);


var sum = parseInt( str1);

if (sum<=1000 ){
    alert("ხელფასი დაბალია");

}
else if ( sum>1000 &&  sum<2000){
    alert("ხელფასი საშუალოზე დაბალია"); 
}

else if ( sum>2000 &&  sum<3000){
    alert("საშუალო ხელფასია"); 
}


else if ( sum>3000 &&  sum<5000){
    alert("ხელფასი საშუალოზე მაღალია"); 
}


else {
    alert("მაღალი ხელფასია");
}









var mas =[
["გიორგი","საბა", "mariami","sofo","alexander"],["1","2","3","4","5"], 
["თვის","წლის","საუკუნის","ათწლეულის","დეკადის"],
["არ არის","გახდება","არის","შეიძლება გახდეს","იყო"],
]; 


var Name;
var Number;
var Age;
var Being;


Name= mas [0] [1];
Number =mas [1] [3];
Age =mas [2] [1];
Being = mas [3] [2];

alert ( Name +Number + Age + Being)
