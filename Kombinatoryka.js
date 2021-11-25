//@ts-check

/* integers to do combinatorics */
var one=1;
var two=1;
var three=1;
var four=1;

/* array of combos auxillary integer to track index of array and string to .push new indexes (combination) into array  */
var allcombination = [];
var positionofarray = 0;
var newcombo;

/* auxillary integers copy of one two ... */
var oneprim;
var twoprim;
var threeprim;
var fourprim;

/* because it does not work :(( */
console.log ("test");

/* funtion to push new combos into the array  */
function pushingindexes(first, second, third, fourth) {

/* saving  numbers before we asign to them a specific mark */
oneprim=first;
twoprim=second;
threeprim=third;
fourprim=fourth;

/* changing a number to a specific mark notice that numbers 1-9 are not mentioned because 1 means 1, 2 means 2 etc... */
if (first === 10) {
       first=0;
   }
if (second === 10) {
       second=0;
}
if (third === 10) {
       third=0;
}
if (fourth === 10) {
       fourth=0;
}
if (first === 11) {
    first="a";
}
if (second === 11) {
    second="a";
}
if (third === 11) {
    third="a";
}
if (fourth === 11) {
    fourth="a";
}
if (first === 12) {
    first="b";
}
if (second === 12) {
    second="b";
}
if (third === 12) {
    third="b";
}
if (fourth === 12) {
    fourth="b";
}
if (first === 13) {
    first="c";
}
if (second === 13) {
    second="c";
}
if (third === 13) {
    third="c";
}
if (fourth === 13) {
    fourth="c";
}
if (first === 14) {
    first="e";
}
if (second === 14) {
    second="e";
}
if (third === 14) {
    third="e";
}
if (fourth === 14) {
    fourth="e";
}
if (first === 15) {
    first="f";
}
if (second === 15) {
    second="f";
}
if (third === 15) {
    third="f";
}
if (fourth === 15) {
    fourth="f";
}

/* changing every variable to string because we work with both strings and integers */
first.toString();
second.toString();
third.toString();
fourth.toString();

    /*newcombo = "f"+ first + second + third + fourth; 
    
    -- don't know why it's not working so I tried wtep by step*/
    newcombo=newcombo + "f";
    newcombo=newcombo + first;
    newcombo=newcombo + second;
    newcombo=newcombo + third;
    newcombo=newcombo + fourth;
    allcombination.push(newcombo);

    /*newcombo = first + "f" + second + third + fourth;*/
    newcombo=newcombo + first;
    newcombo=newcombo + "f";
    newcombo=newcombo + second;
    newcombo=newcombo + third;
    newcombo=newcombo + fourth;
    allcombination.push(newcombo);

    /*newcombo = first + second + "f" + third + fourth;*/
    newcombo=newcombo + first;
    newcombo=newcombo + second;
    newcombo=newcombo + "f";
    newcombo=newcombo + third;
    newcombo=newcombo + fourth;
    allcombination.push(newcombo);

    /*newcombo = first + second + third + "f" + fourth;*/
    newcombo=newcombo + first;
    newcombo=newcombo + second;
    newcombo=newcombo + third;
    newcombo=newcombo + "f";
    newcombo=newcombo + fourth;
    allcombination.push(newcombo);

    /*newcombo = first + second + third + fourth + "f";*/
    newcombo=newcombo + first;
    newcombo=newcombo + second;
    newcombo=newcombo + third;
    newcombo=newcombo + fourth;
    newcombo=newcombo + "f";
    allcombination.push(newcombo);

    console.log (allcombination[positionofarray]); 
    positionofarray++;
    console.log (allcombination[positionofarray]); 
    positionofarray++;
    console.log (allcombination[positionofarray]); 
    positionofarray++;
    console.log (allcombination[positionofarray]); 
    positionofarray++;
    console.log (allcombination[positionofarray]); 
    positionofarray++;


/*reasigning numbers to variables to track correct order of combinations */
first=oneprim;
second=twoprim;
third=threeprim;
fourth=fourprim;
}

/* Loop for executing the function and changing characters in the "cipher lock" total combination 15*15*15*15*5 (4 marks from 15 characters pool and 5 possible positions of "f") */
for (;  four===16; one++ ) {

    pushingindexes (one, two, three, four);

      if (one === 15) {
        one=1;
        two++;
    }
    if (two === 15) {
        two=1;
        three++;
    }
    if (three === 15) {
        three=1;
        four++;
    }
}
