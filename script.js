//tarea ejercicios de leetcode 
//primer ejercicio
//two-som
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    var map ={};
    for(var i = 0 ; i< nums.length ; i++){
        var n = nums[i];

        if(map[target-n] >= 0){
            return [map[target-n],i]
        }
        else {
            map[n]=i
        }
    }
    
};
/*numer-palindromos*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var nums = 0;
    var copy = x;
    
    while (copy > 0) {
        const digit = copy % 10;
        nums = nums * 10 + digit;
        copy = ~~(copy/10);
    }
    return nums == x;
};
//romano a entero//
/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
    var numero = [];
    for (var i = 0; i<s.length;i++){

        if ((s[i] == "I" && (s[i+1] == "V" ||s[i+1] =="X"))||(s[i] == "X" && (s[i  +1] == "L" ||s[i+1] =="C"))||(s[i] == "C" && (s[i+1] == "D" ||s[i+1] =="M"))){
            var valor = s[i]+s[i+1];
            i = i +1;
        }else{valor = s[i]};
        numero.push(valor)  ;          
    }

    var romanos = 0
    for(i = 0;i<numero.length;i++){
        var numeroromano
        switch(numero[i]){
            case "I":
                numeroromano = 1;
                break;
            case "V":
                numeroromano = 5;
                break;
            case "X":
                numeroromano = 10;
                break;
            case "L":
                numeroromano = 50;
                break;
            case "C":
                numeroromano = 100;
                break;
            case "D":
                numeroromano = 500;
                break;
            case "M":
                numeroromano = 1000;
                break;
            case "IV":
                numeroromano = 4;
                break;
            case "IX":
                numeroromano = 9;
                break;
            case "XL":
                numeroromano = 40;
                break;
            case "XC":
                numeroromano = 90;
                break;
            case "CD":
                numeroromano = 400;
                break; 
            case "CM":
                numeroromano = 900;
                break;  
            default:
                numeroromano = 0;
        }
        romanos = romanos + numeroromano
        
    }
    
    return(romanos)
};
//longitud de la ultima palabra
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let string = s.trim();
    return string.length - string.lastIndexOf(` `) -1;
    
};
//plus-one
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};
//simgle- number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let only = 0;
    for (let i = 0; i < nums.length; i++) {
        only = only ^ nums[i];
    }
    return only; 

    
};
// espero ber cumplido con los parametros