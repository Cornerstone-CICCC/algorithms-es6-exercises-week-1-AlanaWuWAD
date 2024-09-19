/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const width = 22.2
const length =30.2
const sleeve = 8.64

let buySize = [width, length, sleeve]
let size = []
let sizeTable = [[28,26,24,22,20,18],[34,33,31,30,29,28],[10.13,9.63,8.88,8.63,8.38,8.13],["3XL","2XL","XL","L","M","S"]]

for (let i=0; i< sizeTable.length -1; i++){
    for (let j=0; j < sizeTable[i].length; j++){
       
        if (buySize[i] >= sizeTable[i][j]){
            size[i] = sizeTable[sizeTable.length -1][j]
        }
        else {
            size[i] = null
        }
    
        if (size[i]){
            break;
        }

    }
  
}
console.log(size)

if (size[0] === size[1] && size[0] === size[2]) {
    console.log(size[0])
}
else {
    console.log(`N/A`)
}
    


