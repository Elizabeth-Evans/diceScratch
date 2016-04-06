// first dice
// var faceOne=1;
// while (faceOne !=i){
// var showOne = function() {
//   $('#cube').attr('class', 'showOne'+faceOne);
//   if(faceOne==6) {
//     faceOne=1;
//   } else {
//     faceOne++;
//   }
// }
// };

var faceOne=1;

var showOne = function() {
  $('#cube').attr('class', 'showOne'+faceOne);
  if(faceOne==6) {
    faceOne=1;
  } else {
    faceOne++;
  }
};

var timers=setInterval("showOne()", 500);

// second dice
var faceTwo=1;

var showTwo = function() {
  $('#cube2').attr('class', 'showTwo'+faceTwo);
  if(faceTwo==6) {
    faceTwo=1;
  } else {
    faceTwo++;
  }
};

var timers=setInterval("showTwo()", 500);

// third dice

var faceThree=1;

var showThree = function() {
  $('#cube3').attr('class', 'showThree'+faceThree);
  if(faceThree==6) {
    faceThree=1;
  } else {
    faceThree++;
  }
};

var timers=setInterval("showThree()", 500);

// fourth dice

var faceFour=1;

var showFour = function() {
  $('#cube4').attr('class', 'showFour'+faceFour);
  if(faceFour==6) {
    faceFour=1;
  } else {
    faceFour++;
  }
};

var timers=setInterval("showFour()", 500);

// fifth dice

var faceFive=1;

var showFive = function() {
  $('#cube5').attr('class', 'showFive'+faceFive);
  if(faceFive==6) {
    faceFive=1;
  } else {
    faceFive++;
  }
};

var timers=setInterval("showFive()", 500);




// var show = function() {
//   $('#cube2').attr('class', 'show'+face);
//   if(face==6) {
//     face=1;
//   } else {
//     face++;
//   }
// };
//
// var timer2=setInterval("show()", 500);


// do{
// if(face==6) {
//     face=1;
//   } else {
//     face++;
//   }
// }
// while (face = 6);
// };

// var i = 0;
// var n = 0;
//
// while (i < 5) {
//   i++;
//
//   if (i === 3) {
//     continue;
//   }
//
//   n += i;
// }

// for (step = 0; step < 5; step++)

// [1,2,3].forEach(function(i) {
//   something();
// });

// increases the die
// if(face==6){
//   face++;
// }
