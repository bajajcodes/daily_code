function findMax(...rest) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < rest.length; ++index) {
    if (max < rest[index]) {
      max = rest[index];
    }
  }

  return max;
}

function charAt(string, position) {
  return string[position] !== undefined || string[position] != null
    ? string[position]
    : "not found";
}

function isWeekdayOrWeekend(day){
    return day === "Saturday" || day === "Sunday" ? "weekend" : "weekday";
}

console.log(isWeekdayOrWeekend("Monday"));