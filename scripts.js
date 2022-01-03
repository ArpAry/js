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

// var at=document.getElementById("show-loader").onclick=function(){
//     document.getElementById("spinner-loader").style.display="block";
//     window.setTimeout(function(){
//         document.getElementById("spinner-loader").style.display="none";
    
        
//     },10000);
// }
// var count=0;
// var timeInt=window.setInterval(function(){
// console.log(count);
// count++;
// if(count>5)
// window.clearInterval(timeInt);

// },1000);

///////
/*  lecture 39 */
//////

// function add_leading_zero(num)
// {
//     if(num<10)
//     return "0"+num.toString();
//     else
//     return num.toString();
// }

// window.setInterval(function(){
//     var currentDate=new Date ();
// var hours=currentDate.getHours();
// var minute=currentDate.getMinutes();
// var second=currentDate.getSeconds();

// document.getElementById("hours").innerHTML=add_leading_zero(hours);
// document.getElementById("minutes").innerHTML=add_leading_zero(minute);
// document.getElementById("seconds").innerHTML=add_leading_zero(second);

// },1000);




///////
/*  lecture 40 */
//////

// var x=0;
// while(x<20)
// {
//     if(x>5)
//     break;
   
//     console.log(x);
//     x++;
// }


// var y=0;
// while(y<20)
// {
//     if(y%2!=0)
//     {
//         continue;
//     }
//     console.log(y);
//     y++;
// }

///////
/*  lecture 41 */
//////

// document.getElementById("show_option").onclick=function()
// {
//     var selectField=document.getElementById("options");
//     var selectedOption=selectField.options.selectedIndex;
//     console.log(selectedOption);
//     var selectedValue=selectField.options[selectedOption];
//     console.log(selectedValue.innerHTML);
//}


///////
/*  lecture 42 */
//////

// document.getElementById("show_option").onclick=function()
// {
//     var selectedField=document.getElementById("options");
//     var selectedOptions=selectedField.options.selectedIndex;
//     console.log(selectedOptions);
//     var selectedValue=selectedField.options[selectedOptions];
//     console.log(selectedValue.innerHTML);
//     document.getElementById("selected_option").innerHTML=selectedValue.innerHTML;


// }

// document.getElementById("show_option").onclick=function()
// {


// var selectedOption = document.getElementById("options").value;
// console.log(selectedOption);
// document.getElementById('options').value=selectedOption;


// }



// document.getElementById("show_radio").onclick=function(){
//     var radio=document.getElementsByName("gender");
//     var ex;
//     for(var i=0;i<radio.length;i++)
//     {
//         if(radio[i].checked)
//         {
//             ex=radio[i].checked;

//         }
//     }
//     document.getElementById("selected_radio").innerHTML=ex;
// }

// document.getElementById("show_check").onclick=function()
// {

//     var select=document.getElementsByName("interest");
//     document.getElementById("selected_check").innerHTML="";
//    //console.log(select);
//     document.getElementById("selected_check").innerHTML="<ul>";
    
//     for(var i=0;i<select.length;i++)
//     {
//         if(select[i].checked)
//         {
//             document.getElementById("selected_check").innerHTML+="<li>"+select[i].value+"</li>";
//             //console.log(select[i].value);
//         }
//     } 
//     document.getElementById("selected_check").innerHTML+="</ul>";
// }

///////
/*  lecture 43 */
//////

// document.getElementById("education_level").onchange=function()
//     {
//         var selectField=document.getElementById("education_level");
//         var selectOption=selectField.options.selectedIndex;
//         var selectedValue=selectField.options[selectOption];
//         document.getElementById("selected_level").innerHTML=selectedValue.innerHTML;
//     }



// var order=document.getElementsByName("meal");
// for(var a=0;a<order.length;a++)
// {
//     order[a].onchange=function()
//     {
//         document.getElementById("selected_check").innerHTML="";
//         document.getElementById("selected_check").innerHTml="<ul>";
//         for(var b=0;b<order.length;b++)
//         {
//             if(order[b].checked)
//             {
//                 document.getElementById("selected_check").innerHTML+="<li>"+order[b].value+"</li>";
//             }
//             document.getElementById("selected_check").innerHTML+="</ul>";

//         }

//     }

// }



/////////////
//// video 57
////////////

// $("#hide").click(function(){
// $(".example").css("display","none");
// });

// $("#hide").click(function(){
//     $(".example").hide();
// })

//////////
/////////////
//// video 58
////////////


// var content=$("#sample_text").html();
// console.log(content);

//var content=$("#sample_text").html("Hello jQuery");


// var text_content =$("#sample-text-only").text();
// console.log(text_content);


// var url_link=$("#link-element").attr("href");
// console.log(url_link);

//  $("#link-element").attr("href","https://www.youtube.com");
//  var url_link=$("#link-element").attr("href");
//  console.log(url_link);

$("#change_image").click(function(){

$("#imagem_js").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX///////1FR0T//v/8//////tubm56enr6/////vxxcXF0dHRESUxiY2V3d3dgYGBQVFdoaWtOUE1KTlFTV1oVbZtZXWAVcZ71//89PzwSY48UaJYZealGS0xdXVsAbJy2t7mhoqT29vahvcu83OMANV07eJsZf68+Q0TGx8irrK6Wl5nT09Ph4eGLjYo0NzUAVoIARm4AO17X6O4ALFHN2t8APmkAKVUSYJIVbpUsMDQ2Oj+7v8GChonp6+xFRUi21NyxzN3s9/6auMR5obhijKhLgZ4EVHgAT360xNA9aYMMXYEAR2zk+Px2kpw3X3ZMZnsLQWMALU0AHERwq7mBsMiWwNNqp8ENZp0SVnEuaH8AN2Y3YX/Q5/Ynd5Ztk6IAI1JqgZAmRl6UpLBXmKtQkLJWb4AADzwAHj2Kn6wAh8JrsNaq2OyJw+ASlcpdr8wjm9M8ptAmneAYfbcOi79lk7NZh5ZC5mjMAAALTUlEQVR4nO2bi1vTyBbAJySBhIdQ29LQVgqF8i70TWOl0BZpsRRRFparCyy66Pq4COLu33/PmSR9Ub2iu4TwnZ+fQidpv/nlzOPMdGSMIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAji1qOqAhPqqPDSAC6Jomjcg6/gd+tlHX7XrUcUw/l8GJFMA0mS8GU+32IId7J2Q4cw+/Dhw9xMf797yDM84HK5BoY97gf9M0tLDwfagiZFZ+fmF1dWFufHx2ajYZvqe22k8NjY3Py91Vx/MznX/NzYgmWI0cs/6pnJ5WZMcoB75VHU3rp/H6ZFeD734IFhBz/cC83XwC+60o9xbgU8x6EJ21Xz78UYYEDl3swDi5kxDJtY74fiPOjhA5gxwtj/wHKcd4BhnYUZt0UubNUbxhgIoHuVF88MrczNLsw+mu/rMgrcq+P21vl65N3uIQ78rBcKKgxFq24s63fN1geX/DjeDIZztlT1BwkP1XHVCwUU5GX987zJihJOJ+DY3Q+Fq2N21fZHCA8PeQyG7jUVR1d52YO59h7X4/Z43I9uto4/yYBn2GBopV4mit0eo+hK/hLu9Qy7Z2+2ij+JyxQc9jQM2ZibF7mj2CNbiQ4NDy3cZAV/mm5TcNAzXy8LD2DJwHBPpzeMe8DQGbmpQe+AyXDDcNZjlHQcM/NDHmcZ9pmCroGG4fygixt27m+9o84y7HGZDDTmcbPkK4bjTjV01Q3Dw65u7tx5VhjzRB1m2G3QMIwO9PICV+fcZaEv7CzD7l6D7oahyyy69603OoaV3j6DZkOraMGpC/xmVvruGfTV22S+2ypauQOCbPFej0HDMNzbY5VhXJ1u2dNt0ZgteutlrjHHC7K+0UGD0caMv2iVDQ7ed77i4H2TrsV62aOu+3VGxgVBddDccJXRLpORhmF+pKvB0qJwdYXhJEZHrhqylRbF7rBsX/1+nk6GQnSpybBrpMtZC8I2OhnKbLE5iBBGR+09tXHVELdSw0sjQJNiT9hBW6StDM6AwOrqzMjSovltlIy9bhaSue7uwdH7/TO5paWl3MORqODQ3jg6ksvl+j2ulflZJkgGgrV0ANtwOB9dmB0bXxl85NCJ0dUzNxsNS/grfo2IAeQ7/rjvLYrWPGF8sWhjNX8O0AIXHj1ZltuXfvBSZXhdUeyp3s8DUhKKSJpWS05Orq1N1CkUCulksqZpknGfw6Io1LtbMblWWn+8oftjnGzWn/VzjNcxv77xeH1iM1k032hfnb+N2ZcEGZsj4z2NFdOb7zbK8XilAh6gFeB4TQJe/tJwrVQq8djU+kSae4r4NQYm5cIt3NCAvqbCAKIlN9efoFy5bNj5DUFvG5YjUK2Wy1tb5Sfrm0lN5pPKbbMzD13Ab7XN7aeJxNaW2Qr9lh8q+XxXFQ3HagxDGdvaSiR+294s4hB1q0IoiRA6SWZKsrSTijwDPYhHDAKYbRNsoSWM/HlAzKHFZiKpnVJSYpKRIdwSwE6pgV4qk4lnKkgjgq1+QfOvoRjy1qMIwFu2kHjm5cudUk1ht8YQ21P65HkqAn5YQx6PWKxaNQQxVCHAG+oAXrSiCHGH7hiPx589S0SWn5+kzY9v+tcOOeiBsrL5dJf7cawQxswIhnzrv+zt7++vAZMG8FsBSvZ+1fWQV/cfmIqVWBkHVjB8lskknu8+3dSYCl2SGd+P24EECRlTCk+XI5FMIpF4FjfZ+s+LDSuCur5ujP6y1a9kDkZeSeveA1A0R9RKLM6fUiaTeQYfF3m5/HRTYjzj4XOIHUA10zu7kUgkkYBqQf9JRX47LhUwW3mSNZpoyPurhNkbZp8Kx8jC8WSbohweheqK1Vh8v3T8JIHNAcBPjfy+kzamRlsMMX0unuxG8HFHIsvLiZ3tiSTPwyBMDAz5GBPy/sUUkTWlOipHUDGSUnEKFK2+uDXBcD6d2H6TWU5xw5eR3ZMiRt2ufph+hQ88klpOPH2dLsLoB/0S6y3L2gs+ivp8R0d/MFnF/JtJVvtE+FpKkMXikTdkjqjZ8jbjSYOkFNOvdxLLKXx4y6/WmC2GGJDX4BdJ7b7a5hkXPw0lCph3qYLyhIfQ5zsInjJZ4YeFMJJ4qK1+IBOKZOXQrxtBjGVjLzS8aJ6eKqaPX+1iKFOvwfmm/RTI0LTj3yOp529KedY+1uETn/JzQZj9TqE9Q/ig54mSAo+g+U4BHsZa4CCg61l/NVuN1RpX+Y3J0pvUcmT3WLvxrVWosHby9jlMzNrVpws5uMCmAsY8HwxOY2UhZoJ8pZpwJ5O1v4yZHwzjhy2zPISeKcWxndTbkxuPoSwo7/58l2Q4bly5WDfkgmBoHAuGQKpt/QkNVSXp9x1gO81WK+mW65gPwlORku/+3P5XdTogS8kxfKwd8+Mmw2DQiCH0QrU2qcEAKrWsdtFcZX/oB1ndMGz5oPpxTaZs3vThUxWGk69mxg3DIDeUuCFb05MMRpbW9TzvbQUdemLgqiFEXFIg8hJP7m8WnBQE6WtLHG7oNQ2np0FKhmey935SgUm+xVAUVRgmk0eQvOEGQOWw/aMgFVKgA4vK7droENAwZPZCMGSyCCUfvnyECKodqqpNwVij+7PZWPHKxMez0lu0VjRoN8RJEgzP/gvtuoOhoGzAWgqnxGrx1qyYvk2boYSdTVUuzj4xUetsCNldwB+o/s1sS8+uBxhKDcMvDMd9plycX9RUrdOIoU1xw2y1dHtWvd+myRBCeMpwNBG1i/Mz6IidYlTTfb5QQM+Wi6pDDLHhTXmtRvoBDUU0/PxJEs1xwxLlP9cCQS8aPoa2bF+drwPMItqU1Ujf70n8QDcYnl9MCpDRwmrRmEsxXVUhU9/whnzeg4NqUhTtWuleE8jDNb0+0OxD4KDmtbNz7Il8MWyuHmAZoWiyUvAFQzrM+OvKLZwXOgPVbBgGCwxnC8Pw/BN0Sfwyhu9s8/9oIh/CfT5d978oisqNpy4/isAHD254GZysG55/Pr/4UOOrYOM/I4Af44I+n9efFFVICOyu+ncChgHDMHgZhIYpm4Y8ipM1CVfKmHMqSm3/KHiJgtVJydhYdgqwIjINTzWZmTE8A8Gzz2efPtZ4K5W02v7pJd7k8+qTqqhBt3RIPxQF+TBrNtPLPQnapKTKtdPP5wZnZ1/OPuztfbr4AuPQNPgF/cc1Zx0C44Y+c3lYgLwbh01tf/oMGirGER0BmEnA8PLyYKqgibJmd62vA3SyQtZcAB/BCIl5N1O0yQ9fuOMZCr7nju8vg/6N/SKfJO2u9XUAn1LW3If6BUdIHEBgHBG0j58uUO09AvHzTZ/uJyVBxMHVSYYwkbN1Y5vG552EFT90QzCU4Y8IU/zhx4/7nELhsKYpuFODG4gOyWY4ArS4I2O31DfNFNnYQVRVnCRgkd+0QBIwaxN5qcPOKYpaOeDXQ7BgWLO7Kv8OKkuDYUAPhP7SHDLBXQ9Bld7FAoGAfqAnnTR+XAOx9iSb9euBbEF2yHrv2qyVs36/Httjd9DQ6HaPq1l/NfYYpkKH7Cx9P4qswnSwthXz+yt/a1d2uO8AkqCqivaiHMvG/q7B6s9pZ/L+L/iNhSytV8qx+DGshURJctY8/h3IisJKmVgsXlJE/I7x7vVDVVImEvGtMiyZNEHAcxd21+ifRmKll5XMRk3ALTUm37E2igug4nEkg2dGrBPr9tboHwaGGG2zvBw5zt+5vmeiysU3b/88Sdpz+OUmEIT8m+Mknp5w1I7L92Puf4rqnQ2hjMctVFFw3Gr9etzR6BEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQdwp/gfJB7nXCQ5wywAAAABJRU5ErkJggg==");

$("#change_image").hide();

});



//$("#empty_paragraph").html("");
//$("#empty_paragraph").empty();
//$("#empty_paragraph").remove();
//$("#empty_paragraph").hide();
$("#empty_paragraph").show();