let addon = require( './build/Release/addon' );
const microtime = require("microtime");
const sort = require("./sort");


const max_value = 10; 

let array = new Array(max_value);
let array1 = new Array(max_value);
let array2 = new Array(max_value);
let array3 = new Array(max_value);
let array4 = new Array(max_value);

for(let i=0; i<max_value; i++){
    array[i] = new Array(1000);
}


for(let i=0; i<max_value; i++){
    for (let sample_size = 0; sample_size < 1000; sample_size++) {
        array[i][sample_size] = Math.floor(Math.random() * 100);
    }
    array1[i] = array[i].slice();
    array2[i] = array[i].slice();
    array3[i] = array[i].slice();
    array4[i] = array[i].slice();
}




console.info("\n\r");
console.info("===== array.sort =====");

{    

    let startAll = microtime.now();
    
    for(let i=0; i<max_value; i++){
        let start = microtime.now();
        array1[i].sort((a, b) => a - b);
        console.info("Rap:  " + (microtime.now() - start) + " micro sec");  
    }

    console.info("Avg:  " + (microtime.now() - startAll)/max_value + " micro sec");  

    // for(let i=0; i<max_value; i++){
    //     console.info(array1[i]);   
    // }
}


console.info("\n\r");
console.info("===== JavaSctipt Quicksort =====");

{

    let startAll = microtime.now();
    
    for(let i=0; i<max_value; i++){
        let start = microtime.now();
        sort.quickSort(array2[i], 0, array2[i].length-1);
        console.info("Rap:  " + (microtime.now() - start) + " micro sec");  
    }

    console.info("Avg:  " + (microtime.now() - startAll)/max_value + " micro sec");  

    // for(let i=0; i<max_value; i++){
    //     console.info(array2[i]);   
    // }    
}

console.info("\n\r");
console.info("===== Node -> C++ quicksort =====");


{
    let startAll = microtime.now();

    for(let i=0; i<max_value; i++){
        let start = microtime.now();
        let len = array3[i].length;
        array3[i] = addon.quickSortJS(array3[i], 0, array3[i].length-1);
        console.info("Rap:  " + (microtime.now() - start) + " micro sec");  
    }

    console.info("Avg:  " + (microtime.now() - startAll)/max_value + " micro sec");  

    // for(let i=0; i<max_value; i++){
    //     console.info(array3[i]);   
    // }
}

console.info("\n\r");
console.info("===== C++ quicksort =====");

{
    
    for(let i=0; i<max_value; i++){
        array4[i] = addon.quickSortJS2(array4[i], 0, array4[i].length-1);
    }

    // for(let i=0; i<max_value; i++){
    //     console.info(array4[i]);   
    // }
}

