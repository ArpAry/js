//  q1
console.log("This is ex1.js");

//q2






var firstName="Arpit";
var lastName="Arya";
var DOB=2002;
var curYear=2021;
var age= curYear-DOB;
var message="Hi, my name is "+ firstName + lastName +", I'm " + age +"years old and I'm learning Javascript";
document.getElementById("student_message").innerHTML=message;
//q3
var num1 =parseInt(document.getElementById("num_1").innerHTML);
var num2 =parseInt(document.getElementById("num_2").innerHTML);
var average=(num1+num2)/2;
average=average.toFixed(4);
document.getElementById("result").innerHTML=average;


//q 4
    var phone1 = "988866552";
    var phone2 = "99087612366";
    var phone3 = 876543123;

    phone3.toString();
console.log(phone1.length==9);
console.log(phone2.length==9);
console.log(phone3.length==9);


//q5
console.log(Math.pow(32,6));
console.log(32**6);
console.log(3**3);

//q6
 var url1="https://"+document.getElementById("url_1").innerHTML;
 document.getElementById("url_2").innerHTML=url1;

      
 
var url3=document.getElementById("url_3").innerHTML.replace("https://","");
 document.getElementById("url_4").innerHTML=url3;
