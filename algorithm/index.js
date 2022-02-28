const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }); //Create input from commandline

//Extra test
/*
+ Count total of array
+ Find min in array
+ Find max in array
+ Find even elements in array
+ Find odd elements in array
*/ 

//Count total of array
function count(arr){
    return arr.length
}
//Find min in array
function findMin(arr){
    let min = arr[0]
    for(let i=0; i<arr.length;i++){
        if(min>arr[i])
            min = arr[i]
    }
    return min
}
//Find max in array
function findMax(arr){
    let max = arr[0]
    for(let i=0; i<arr.length;i++){
        if(max<arr[i])
            max = arr[i]
    }
    return max
}
//Find even elements in array
function findEvenElements(arr){
    let evenArr = []
    arr.forEach(function(e){
        if(e%2==0)
            evenArr.push(e)
    })
    return evenArr
}
//Find odd elements in array
function findOddElements(arr){
    let oddArr = []
    arr.forEach(function(e){
        if(e%2!=0)
            oddArr.push(e)
    })
    return oddArr
}

//Main test
//Create function sum Min, Max
function sumMax(arr){ //Func sumMax
    let min = arr[0]
    for(let i=0; i<arr.length;i++){
        if(min>arr[i])
            min = arr[i]
    }
    let sumMax = 0;
    for(let i=0; i<arr.length;i++){
        if(min !== arr[i])
        sumMax = Number.parseInt(arr[i]) + sumMax
    }
    return sumMax
}
function sumMin(arr){ //Func sumMin
    let max = arr[0]
    for(let i=0; i<arr.length;i++){
        if(max<arr[i])
            max = arr[i]
    }
    let sumMin = 0;
    for(let i=0; i<arr.length;i++){
        if(max !== arr[i])
            sumMin = Number.parseInt(arr[i]) + sumMin
    }
    return sumMin
}

function main(){ //Func do
    readline.question('', function(str) { // Get input
        let arr = str.split(' ') // Create array
        console.log(sumMin(arr), sumMax(arr)) //Main
        console.log("\nExtra..")
        console.log("Count array: ", count(arr))
        console.log("Find min: ", findMin(arr))
        console.log("Find max: ", findMax(arr))
        console.log("Find even elements: ", findEvenElements(arr))
        console.log("Find odd elements: ", findOddElements(arr))
    });
    readline.close
}

main()

