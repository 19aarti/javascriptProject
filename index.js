// //console.log('Hello world');

// //var : veriable as like container which is store data values
// /***********************************************************/
// // var arr = [1,2,"test",4,5];
// // console.log(arr);
// /***********************************************************/
// //data types: string, number,object(arr,key-value), booleans(true,false),
// //primitive datatypes - sting,number,boolean,undefinded,null,symbol
// //non-primitive datatypes - array,object

// /***********************************************************/
// //operators in js
// //1. Arithmatic 
// var a = 23;
//  var b =23;
//  //console.log(a+b);
// //  console.log(a-b);
// //  console.log(a*b);
// //  console.log(a/b);
// //3.comparision (<,>,<=,>=,==,!=)
// //4.logical(!,&&,||)
// /***********************************************************/
// //function call, function invoke -> follow DRY principle
// //DRY = do not repeat yourself 
// function getavg(a,b){
//     var c= a+b/2;
//   //  console.log(c);
//   return c;
// }
// var d = getavg(10, 20);
// // console.log(d);
// /***********************************************************/
// //if else statement:----------------------------------
// if(a > b){
//    // console.log(a+' -a is gteater that b - '+b);

// }else if(b > a){
//     //console.log(b+' - b is gteater that a - '+a);
// }else if(a == b){
//     //console.log('a and b both are equal - ' +b);
// }
// //array :-------------------------------------

// var arr = [1,2,3,4,5];

// for(var i=0; arr.length > i; i++){
//     if(i == 2){
//         break ;//stop itreation print 1,2 and then break or stop
//       //  continue;//skip current and continue with the others print 1,2,4,5
//     }
//    // console.log(arr[i]);
// }
// //console.log(arr);
// arr.forEach(function(element){
//   //  console.log(element);

// });
// //var : old js use
// //let block level scope accept,beetter mem management  Eg: let b =23;
// //const : dont allow to change veriable. eg const a =0;

// //while loop :----------------------------
// let j =0;
// while(j <arr.length){
//  //console.log(arr[j]);
//  j++;
// }
// //do while loop : first run and then check condition : syntax: do{}while(condition);
// /****************************************************************************/
// //Array : ----------------------------
// var myarr = [1,2,"test",4,5,null,true];
// //console.log(myarr);
// //array method
// //1. array length : myarr.length();
// //console.log(myarr.length);// print 7
// //2.array pop() : myarr.pop();
// //console.log(myarr.pop());// print true
// //3.shift remove 1st element 
// //console.log(myarr.shift());// print 1
// //4. push() : add new one in array
// //myarr.push('aarti');
// //console.log(myarr);//[1, 2, 'test', 4, 5, null, true, 'aarti']
// //5. myarr.unshift();
// //myarr.unshift('aarti'); //print  ['aarti', 1, 2, 'test', 4, 5, null, true, 'aarti'] 
// //console.log(myarr);
// //myarr.toString();//'1,2,test,4,5,,true'
// //sort () : convert into string then sort 
// //slice: - method slices out a piece of an array into a new array.
// //splice menthod  :The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
// // console.log("New Array:<br>" + fruits);//New Array:<br>Banana,Orange,Lemon,Kiwi
// // console.log("Removed Items:<br> " + removed);//Removed Items:<br> Apple,Mango
// // console.log(fruits.slice(1));// ['Orange', 'Lemon', 'Kiwi']
// //console.log(fruits.slice(1, 3));// ['Orange', 'Lemon']
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     c = b - a;
//     return c ;

// });
// //console.log(c);
// /******************************************************/
// //String Metthod:------------------
// //1. 
// let mystring = "hello world";
// //console.log(mystring.length);
// // console.log(mystring.indexOf('w'));//6 bydefault 1st index return
// // console.log(mystring.lastIndexOf('l'));//9 bydefault last index return -1
// // console.log(mystring.slice(1,3));//el
// // console.log(mystring.replace("world","Aarti"));//print hello Aarti replce only 1st occrence
// /******************************************************/
// //Date(:-----------------

// let MyDate = new Date();
// // console.log(MyDate);//Sat Feb 19 2022 17:33:47 GMT+0530 (India Standard Time)
// // console.log(MyDate.getSeconds());//41
// // console.log(MyDate.getFullYear());//2022
// // console.log(MyDate.getMonth());//1
// /******************************************************/
// //DOM manupulation:=========================

// let elemClass = document.getElementsByClassName('.container');
// console.log(elemClass);

var add = document.getElementById('add');
add.addEventListener("click", ()=>{

    updateItems();
    $(this).css("background-color", "#000000");

});

function updateItems() {
    var tit = document.getElementById('title').value;
var desc = document.getElementById('description').value;
    console.log(localStorage.getItem('Itemjson'));
    if (localStorage.getItem('Itemjson') == null) {
        itemJsonArray = [];
        itemJsonArray.push(tit, desc);
        localStorage.setItem('Itemjson', JSON.stringify(itemJsonArray));
    }

}
