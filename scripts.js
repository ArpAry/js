////lecture 2

/*
 alert("test");
*/
/********** */
////lecture 3
/*********/
/*
console.log("checking the console command");
*/


//*********** */
//////lecture 5
//**************** */
//// console.log(document.getElementById("blue_box").innerHTML);
// document.getElementById("blue_box").innerHTML="<h1> arpit </h1>";
// console.log(document.getElementById("blue_box").innerHTML);


/////////////////
//lecture 6
////////////////
// var user_name="Arpit";
// console.log(document.getElementById("user_greeting_message").innerHTML = "Hello  "+user_name+" !");
//************ */



///////
/*  lecture 7 */
//////

// var first_Name="john";
// console.log(typeof first_Name);
// var last_Name="doe";
// var full_Name=first_Name+"123"+last_Name;
// console.log(full_Name);
// console.log(typeof full_Name);
// console.log(full_Name.length);
// var url="https://www.udemy.com";
// console.log(url.replace("https://" ,""));


///////
/*  lecture 8 */
//////
// var power=Math.pow(2,3);
// console.log(power);
// var roundedNumber=Math.round(2.73);

// console.log(roundedNumber);
//     var roundUp=Math.ceil(4.3);
//     console.log(roundUp);
// var roundDown=Math.floor(3.45);
// console.log(roundDown);
// var squareRoot=Math.sqrt(4);
// console.log(squareRoot);
// var randomNumber=Math.random()*100;
// console.log(randomNumber);
///////
/*  lecture 9 */
//////

// var myNumber=3.75236;
// console.log(myNumber.toFixed(2));
// console.log(myNumber.toFixed(4));

// var a=2;
// a+=2;
// console.log(a);

// var c="arpit";
// c+="arya";
// console.log(c);


// var firstNumber="21";
// var secondNumber="4";
// console.log(parseInt(firstNumber)+parseInt(secondNumber));


// var dob=2002;
// console.log(dob.toString()+"  is the year i born");

///////
/*  lecture 10 */
//////
// var bool = true;
// console.log(typeof(bool));

// var bol1= false ;

// console.log(typeof(bol1));

// var age =16;
// console.log(age>=18);
//  var password ="19ara";
//  var confirmpassword="19ara";
//  console.log(password==confirmpassword);
//  console.log(4=="4");
//  console.log(4!=="4");

// var orderValue=800;
// if(orderValue>=1000)
// {
//     console.log("you are eligible to finnance");
// }
// else{
//     console.log("you are not eligible to finance"); 
// }
///////
/*  lecture 11 */
//////
// var a;
// console.log(typeof(a));
// var ab="arpit";
// console.log(ab[5]);

// var temp=null;
// console.log(temp);
// console.log(typeof(temp));
///////
/*  lecture 15 */
//////
// function sum_numbers()
// {
//   var  num1=5;
//   var num2=3;
//   sum=num1+num2;
//   console.log(sum);
// }
// //sum_numbers();
// //sum_numbers();

// function sum_args(num1,num2)
// {
//     add=num1+num2;
//     return(add);
// }
// avg=sum_args(2,4)/2;
// //console.log(avg);
// put=sum_args(-27,55);
// document.getElementById("sum_result").innerHTML=sum_numbers();
// document.getElementById("sum_result").innerHTML=sum_args();
///////
/*  lecture 15 */
//////
// var groups=[
//     ["arpit","arya"],
//     ["john","paul","peter"]
// ];
// console.log(groups);
// console.log(typeof(groups));
// console.log(groups.length);
// groups.push("java");
// groups.pop();
// groups.push("css");
// groups.unshift("c++");
// groups.shift();
// groups.unshift("html");

// var ar=["john","andrew","erica","julio","marie","peter"];

// console.log(ar.slice(0,3));
// console.log(ar.slice(4,));
// console.log(ar.slice(-3,));
///////
/*  lecture 16 */
//////

// var employee={
//     'name':'james bond',
//     '1DOB':'12 june 2000',
//     'own':'bike',
//     'ID':'SBJ0001',
//     'role':'it Analyst'
// };
// console.log(employee.name);
// console.log(employee['1DOB']);
// console.log(employee.ID);

// employee.name='ruskin bond';
// employee.passport=227;
// console.log(employee);
// console.log(employee.length);

// var courses=[
//     {
//         'title':'Learn code in python 3',
//         'reviews':6802,
//         'students': 130129,
//         'categories': ['programming', 'technology']
//     },

//     {
//         'title': 'Learn PHP -  Beginner to Advanced',
//         'reviews': 1204,
//         'students': 30521,
//         'categories': ['web development', 'programming']
//     },

//     {
//         'title': 'Learn Microsoft Excel 2020',
//         'reviews': 4209,
//         'students': 18560,
//         'categories': ['productivity', 'business']
//     }
// ]

// console.log(courses[0].categories[1]);
// console.log(courses[1].categories[0]);
// console.log(courses[2].title);
///////
/*  lecture 17 */
//////

// var student={
//     "firstName": "marie",
//     "lastName":"Smith",
//     'fullName':function(){
//         return this.firstName+" "+this.lastName;

//     }
// }
// console.log(student.fullName());

///////
/*  lecture 21 */
//////

// document.getElementById("click-me").onclick=function
// (){
//     alert("Yot click on button");
// }

// document.getElementById("hover-me").onmouseover=function(){
//     alert("on mouse over");
// }
// document.getElementById("leave-me").onmouseout=function(){
//     alert("you moves the cursor out");
//}
// document.onkeydown=function()
// {
//     alert("you have enter any key ");
// }

//  document.onkeydown=function(event)
//  {
//      alert('you have entered a key '+event.keyCode);
// //     console.log(event.keyCode);
//  };

// document.onkeydown=function(event)
// {
//     if(event.keyCode==65)
//     {
//         alert('you have type a');
//         console.log('you have type a');
//     }
//     else{
//         console.log('you have print other than a');
//     }
// }

// function  showalert()
// {
//     alert('you have entered any key');
// };

///////
/*  lecture 23 */
//////
// document.getElementById("color_button").onclick= function()
// {
//     document.getElementById("color_button").style['backgroundColor']="purple";
//     document.getElementById("color_button").style.transform="translateY(100px)";
//     document.getElementById("color_button").style.color="red";
//}
// document.getElementById("color_button").onclick= function()
// {
//     this.style['backgroundColor']="purple";
//     this.style.transform="translateY(100px)";
//     this.style.color="red";
// }
// var ar=document.getElementById("color_button");
// ar.onmouseover= function()
// {
//    ar.style['backgroundColor']="purple";
//     ar.style.transform="translateY(100px)";
//     ar.style.color="red";
// };
///////0
/*  lecture 24*/
//////
// var ele=document.getElementsByClassName("example");
// console.log(ele);
// ele[0].innerHTML="HELLO SIR HOW ARE YOU";
// var para =document.getElementsByTagName("p");
// console.log(para);
//para[2].innerHTML="HELLO TELL ME ABOUT YOURSELF";
///////
/*  lecture 25 */
//////
// for(var a=0;a<5;a+=1)
// {
    // }
    //     console.log(a);

// var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];
// for(var i=0;i<students.length;i++)
// {
//     console.log(students[i]);
//}


// var car = {
//     'Year': 2018,
//     'Model': 'Evoke',
//     'Manufacturer': 'Land Rover',
//     'FuelType': 'Diesel'}

//     for (var ele in car)
//     {
//         console.log( ':'+car[ele]);
//     }

// var client={
//     'name':'akhilesh',
//     'from':'ghazipur',
//     'year':2000
// }

// for (var m in client)
// {
//     console.log(m+":"+client['m']);
// }

// var ka=document.getElementsByClassName("example");
// console.log(ka.length);
// for(var i=0;i<ka.length;i++)
// {
//     ka[i].style.color="red";
//     ka[i].style.backgroundColor="blue";
// }
///////
/*  lecture 26 */
//////
// var count=0;
// while(count<5)
// {
//     console.log(count);
//     count++;
// }

// var da=0;
// do{
//     console.log(da);
//     da++;
// }while(da>5);
///////
/*  lecture 27 */
//////
// var age=21;

// if(age<18)
// {
//     console.log("underage");
// }
// else if (age>=65)
// {
//     console.log("Senior");
// }
// else{
//     console.log("Adult");
// }


// var grade =7,absences=3;
// if(grade>=7&&absences<=5)
// {
//     console.log("the student is pass");
// }
// else{
//     console.log("the Student is Fail");
// }

// var grade=7,absences=6;
// if(grade<7||absences>5)
// {
//     console.log("the student is fail");
// }
// else{
//     console.log("The student is pass");
// }
///////
/*  lecture 28 */
//////
// var ar="";
// if(ar)
// {
//     console.log("The name is "+ar);
// }
// else 
// {
//     console.log("The name has not been informed");
// }

// var arr="arpit";
// console.log( arr ?"This is name "+arr:"the name has not been informed");

// var age=68;
// console.log(age<18 ? "underage":age>18&&age<60 ?"adult":"senior ");
///////
/*  lecture 29 */
//////
// var isMember=false;
// var age=25;
// if(isMember==true||age>=65)
// console.log("free");
// else
// {
//     if (age<18)
//     {
//         console.log('$60.00');
//     }
//     else{
//         console.log('$ 120.00')
//     }
// }
// var employees = [
        
//     {
//         'name': 'Charles Silva',
//         'age': 45,
//         'children': ['Andrew Silva', 'Maria Silva']
        
//     },

//     {
//         'name': 'Elizabeth Green',
//         'age': 32,
//         'children': ['Peter Green']
        
//     },

//     {
//         'name': 'George Banks',
//         'age': 39,
//         'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
//     }

// ];
// document.getElementById("children").innerHTML="";
// for (var a=0;a<employees.length;a++)
// {
//     var childrenList=employees[a].children;
//    // console.log(childrenlist);
//      for(var b=0;b<childrenList.length;b++)
//      {
//          var child=childrenList[b];
//       console.log(child);
//       document.getElementById('children').innerHTML+= "<li>"+child+"</li>";
//  }
// }
///////
/*  lecture 30 */
//////
// function show_name()
// {
//     var name="akhilesh";
//     console.log(name);
// }
// show_name();
// console.log(name);

// var name='Helen';
// function show_name()
// {
//     console.log(name);
// }
// show_name();


// function show_name()
// {
//     name="john";
//     console.log(name);
// }
// show_name();
// console.log(name);

// for(var a=0;a<3;a++)
// {
//     console.log('parent loop Count',a);
//     for(var a=0;a<3;a++)
//     {
//         console.log('child loop count',a);
//     }
// }



// for(let b=0;b<4;b++)
// {
//     console.log("parent count",b);
//     for(let b=0;b<4;b++)
//     {
//         console.log("child count",b);
//     }
// }

// const PI =3.14;
// PI=2;
// console.log(PI);
///////
/*  lecture 30 */
//////
// console.log(window.innerWidth);
// console.log (innerHeight);

// window.console.log("thuis week");

// var myname="tom";
// console.log(window.myname);

// window.onmousemove=function(e)
// {
//     console.log(e.page);
// }

// window.onmousemove=function(e)
// {
//     if(e.pageY<5)
//     alert("please like and subscribe it");
// }
///////
/*  lecture 31 */
//////
//  var dateObj=new Date();
//  //console.log(dateObj);
// console.log(dateObj.getTime()) ;
// console.log(dateObj.getDay());

// var date2=new Date();
// date2=date2.getTime();
// var hours=date2/3600000;
// console.log(Math.floor(hours));

// var Date1=new Date(13,11,21);
 //console.log(Date1);

//  var isoDate=new Date("2021-12-13");
//  console.log(isoDate);

//  var shortDate=new Date("11/01/2021");
//  console.log(shortDate);

// var longDate5=new Date("Mar 18 2020");
 //console.log(longDate5);

///////
/*  lecture 32 */
//////
// var orderDate=new Date("2020-03-26");
// var deliverDate=new Date("2020-04-02");
// var time=(deliverDate-orderDate)/86400000;
// document.getElementById("delivery_time").innerHTML=time;
///////
/*  lecture 33 */
//////
// console.log("meassage 1");
// window.setTimeout(function(){
//     console.log("Message 2");
// },3000);

var at=document.getElementById("show-loader").onclick=function(){
    document.getElementById("spinner-loader").style.display="block";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display="none";
    
        
    },10000);
}
// var count=0;
// var timeInt=window.setInterval(function(){
// console.log(count);
// count++;
// if(count>5)
// window.clearInterval(timeInt);

// },1000);