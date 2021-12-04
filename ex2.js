function cToF( c )
{
    f=(9*c/5)+32;
    return f;
}
var ar1=document.getElementById("celsius_1").innerHTML;

document.getElementById("fahr_1").innerHTML=cToF(ar1);

ar2=document.getElementById("celsius_2").innerHTML;
document.getElementById("fahr_2").innerHTML=cToF(ar2);

ar3=document.getElementById("celsius_3").innerHTML;
document.getElementById("fahr_3").innerHTML=cToF(ar3);



var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 

document.getElementById("best_students").innerHTML=classification.slice(-3,);

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'totReview':function(){
        var total=this['5_stars_reviews']+this['4_stars_reviews']+this['3_stars_reviews']+this['2_stars_reviews']+this['1_stars_reviews'];
        return total;
    }
}
    document.getElementById("course_title").innerHTML=course.title;      
document.getElementById("main_category").innerHTML=course.categories[0];
document.getElementById("reviews_5_stars").innerHTML=(course['5_stars_reviews']/course.totReview()*100).toFixed(0);

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

var get=shoppingList.pop();
console.log(shoppingList);
shoppingList.unshift(get);

console.log(shoppingList);
shoppingList.push("Cheese");
shoppingList.push('Eggs');

console.log(shoppingList);