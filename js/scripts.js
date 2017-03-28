function countUpBy(countTo, countBy) {
  var numbers = [];
  if (Math.abs(countTo) < Math.abs(countBy)) {
    alert("Did you mean to count to " + countBy + " and count by " + countTo + "?");
  } else if (!/\d/.test(countTo) || !/\d/.test(countBy)) {
    alert("countTo and countBy must be numbers");
  } else if ((countTo > 0 && countBy > 0) || (countTo < 0 && countBy < 0)) {
    for (var i = 0; Math.abs(i) <= Math.abs(countTo); i += countBy) {
      numbers.push(i);
    }
  } else if (true) {
    // for (var i = countTo; Math.abs(i) >= 0; i += countBy) {
    //   numbers.push(i);
    }
  }

  return numbers
}

var test = countUpBy(-50,-5);
console.log(test)
