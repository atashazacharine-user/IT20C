function legalAge (age) {

    if (age >= 18) {
        console.log("YOU ARE A BITCH");

    }else {
        console.log("YOU ARE A KID");
    }
}

legalAge(50);

function computedGrade (grade){
    if (grade >= 94.5) {
        console.log("1");

}else if (grade >= 91.5) {
        console.log("1.25");

}else if (grade >= 89.5) {
        console.log("1.5");

}else if (grade >= 86.5) {
        console.log("1.75");

}else if (grade >= 84.5) {
        console.log("2");
}else{
        console.log("Not within the transmutation");}
}

computedGrade(95);