/*

i=2;

do{
    console.log(i);
    i++;
}while(i<=5)

*/
/*
output = "";
i = 1;

do {
    output += i;
    i++;
} while (i <= 5);

console.log(output);
*/

arr = [4, 2, 3];
index = 0;
output = "";

do{
    output += arr[index] + " ";
    index++;
} while(index < arr.length);

console.log(output);