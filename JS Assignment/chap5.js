// chapter # 5

var num1 = 5
var num2 = 10
var result = num1 + num2
document.write(" sum of "  + num1 + " and " + num2 + " is: " + result);
document.write("<br>")

var subtraction = num1 - num2
document.write(" subtraction of "  + num1 + " and " + num2 + " is: " + subtraction);
document.write("<br>")

var multiplication = num1 * num2
document.write(" multiplication of "  + num1 + " and " + num2 + " is: " + multiplication);
document.write("<br>")

var division = num1 / num2
document.write(" division of "  + num1 + " and " + num2 + " is: " + division);
document.write("<br>")

var modulus = num1 % num2
document.write(" modulus of "  + num1 + " and " + num2 + " is: " + modulus);
document.write("<br>")
document.write("<br>")

// Q# 3a
var number;
// Q#3b
document.write("Value after variable declaration is: " + number)
document.write("<br>")

// Q#3c
number = 5;

//Q#3d
document.write("initial value :" + number)
document.write("<br>")

//Q#3e
number ++;
//Q#3f
document.write("Value after increment is : " + number)
document.write("<br>")

//Q#3g
number += 7;
 
//Q#3h
document.write("value after addition is :" + number)
document.write("<br>")

//Q#3i
number --;

//Q#3j
document.write("Value after decrement is :" + number)
document.write("<br>")

//Q#3k
var reminder = number%3
//Q#3l
document.write("The reminder is: " + number)
document.write("<br>");
document.write("<br>");


// Question #4

var ticketPrice = 6000;
var totalTicket = 5;
var totalCost = ticketPrice * totalTicket;

document.write("total cost to buy:" , totalTicket ,"tickets to a movie is :" , ticketPrice )
document.write("<br>");
document.write("<br>");
document.write("<br>");

//Question #5

let $number = 5;
document.write($number + "* 1 = " + ($number*1) )
document.write("<br>");
document.write($number + "* 2 = " + ($number*2) )
document.write("<br>");
document.write($number + "* 3 = " + ($number*3) )
document.write("<br>");
document.write($number + "* 4 = " + ($number*4) )
document.write("<br>");
document.write($number + "* 5 = " + ($number*5) )
document.write("<br>");
document.write($number + "* 6 = " + ($number*6) )
document.write("<br>");
document.write($number + "* 7 = " + ($number*7) )
document.write("<br>");
document.write($number + "* 8 = " + ($number*8) )
document.write("<br>");
document.write($number + "* 9 = " + ($number*9) )
document.write("<br>");
document.write($number + "* 10 = " + ($number*10) )
document.write("<br>");
document.write("<br>");



//Question #6
let celsius  = 30;
let celToFer = (celsius * 9/5) + 32;
document.write (celsius , "&degC" , "is" , celToFer , "&degF" );
document.write("<br>");

let fahrenheit = 50;
let ferTocel = (fahrenheit - 32) * 5/9
document.write (fahrenheit , "&degF" , "is" , ferTocel , "&degC")
document.write("<br>");

//Question # 7
document.write("<h2>Shopping Cart</h2>")
document.write("<br>");

let priceItem1 = 650;
document.write ("Price of item 1 is:" , priceItem1)
document.write("<br>");

let quantity1 = 3;
document.write ("Quantity of item is :" , quantity1)
document.write("<br>");

let priceItem2 = 100;
document.write ("Price of item 1 is:" , priceItem2)
document.write("<br>");

let quantity2 = 7;
document.write ("Quantity of item is :" , quantity2)
document.write("<br>");

let shippingcharges = 100;
document.write ("Shipping charges of item is :" , shippingcharges)
document.write("<br>");

// let totalCost = (priceItem1*quantity1) + (priceItem2*quantity2) + shippingcharges;
// document.write ("Total cost of your order is :" , totalCost);
// document.write("<br>");

// Question # 8
document.write("<h2>Mark sheet</h2>")

let totalMarks = 980;
document.write ("Total Marks:" , totalMarks)
document.write("<br>");

let marksObtain = 804;
document.write ("Marks Obtain:" , marksObtain)
document.write("<br>");

let percentage = marksObtain/totalMarks * 100
document.write ("percentage" , percentage)
document.write("<br>");

//Question9

document.write("<h2>Currency In PKR</h2>");
document.write("<br>");
let dollars = 10;
let saudiRiyals = 25;
let totalCurrencyPKR = (dollars*104.80) + (saudiRiyals*28);
document.write("<br>");
document.write("Total Currency in PKR is ",totalCurrencyPKR);
document.write("<hr>");

// Question10
document.write("<h2>Question10</h2>");
document.write("<br>");

document.write("<h2>Arithmetic Operations In Single Expressions</h2>");
document.write("<br>");
var someNumber = 10;
var calculations  = [(someNumber + 5)*10]/2;
// console.log(calculations);
document.write("Total Calculation is ",calculations);
document.write("<hr>");

//Question11
document.write("<h2>Question11</h2>");
document.write("<br>");

document.write("<h2>Age Calculator</h2>");
document.write("<br>");
//11a
var currentYear = 2023;
document.write("Current Year ",currentYear);
document.write("<br>");
//11b
var birthYear = 1997;
document.write("Birth Year ",birthYear);
document.write("<br>");
//11c
var age = currentYear - birthYear;

document.write("Your Age is ",age);
document.write("<hr>");
























