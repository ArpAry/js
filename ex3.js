// function c_to_f(c)
// {
//     var f=(9/5*c)+32;
//     return f;
    
// };
// document.getElementById("convert").onclick=function()
// {
//     var a=document.getElementById("temp_celsius").value;  
//     document.getElementById("temp_fahr").innerTexterHTML=c_to_f(a);
// };
 
function ctof(cel)
{
    var f;
    f=(9/5*cel)+32;
    return f;
}
document.getElementById("convert").onclick=function()
{
    var k;
   k= document.getElementById("temp_celsius").value;
   if(k=="")
   {
       alert("the temperature is invalid");
   }
    document.getElementById("temp_fahr").innerHTML=ctof(k);
}


//to remove the first line which is written there
document.getElementById("anos_copa").innerHTML="";
var i;
for(i=2022;i<=2050;i+=4)
{
    document.getElementById("anos_copa").innerHTML +="<li>"+i+"</li>" ;
}


// function result()
// {
//  g1=document.getElementById("grade1").value;
//  g2=document.getElementById("grade2").value;
//  abs=document.getElementById("absences").value;
//  pres=(20-abs)/20*100;
//  if(pres<70)
//  {
//     document.getElementById("result").innerHTML="<H1>"+ATTENDANCE + IS + SHORT+"</H1>";
//  }
//  else if((g1+g2)/2<6.5)
//  {
//      document.getElementById("result").innerHTML="<H1>"+Average + Is + Low+"</H1>";
//  }
//  else{
//    document.getElementById("result").innerHTML= "<H1>"+pass+"</H1>";
//  }
//};

document.getElementById("calculate").onclick=function()
{
    g1=document.getElementById("grade1").value;
 g2=document.getElementById("grade2").value;
 abs=document.getElementById("absences").value;
 av=(parseInt(g1)+parseInt(g2))/2;
 pres=(20-abs)/20*100;
 //document.getElementById("result").innerHTML=av;

 if(pres<70)
 {
     result="Attendance is short "+pres;
    //document.getElementById("result").innerHTML=result;
 }
  if(av<6)
 {
    result="Average Is Low "+av;
     //document.getElementById("result").innerHTML=result;
 }
 else{
    result="Pass "+" Attendance is "+pres+ "%"+ " Average  Grade is "+av+"";
    }
    document.getElementById("result").innerHTML=result;

};

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

 document.getElementById("course_sales").innerHTML="";
var totalsales=0;
for(var a=0;a<sales.length;a++)
{
    var sale=sales[a];
    if(!sale['refundRequested'])
    {
        var line="<tr>";
        line +="<td>"+sale.student+"</td>";
        line +="<td>"+sale.date+"</td>";
        line +="<td>"+sale.amount+"</td>";
        line +="</tr>";
        totalsales+=sale.amount;
        document.getElementById("course_sales").innerHTML+=line;
    }
    document.getElementById("total_sold").innerHTML=totalsales;
}