// =============================================================
// Level 2 · Task 2 — Conditions
// =============================================================
// The functions are already set up. Fill in the part inside { }.

// TODO 1: return true if age is 18 or more, otherwise false
function canVote(age) {
if (age >=18) {
  return true;
} else {
  return false;
}
}


// TODO 2: 90+ "A", 80+ "B", 70+ "C", 60+ "D", otherwise "F"
//         Start from the HIGHEST grade and work down.
function letterGrade(score) {
if (score >= 90) {
  return "A";
} else if (score >= 80) {
  return "B";
} else if (score >= 70) {
  return "C";
} else if (score >= 60) {
  return "D";
} else {
  return "F";
}
}


// TODO 3: under 5 → 0, under 18 → 5, 65 or older → 7, otherwise → 10
function ticketPrice(age) {
if (age < 5) {
  return 0;
} else if (age < 18) {
  return 5;
} else if (age >= 65) {
  return 7;
} else {
  return 10;
}
}


// TODO 4: true only if age is 12 or more AND hasTicket is true
//         && means "and": both sides must be true
function canEnter(age, hasTicket) {
if (age >= 12 && hasTicket) {
  return true;
} else {
  return false;
}
}


// Try them out:
console.log(letterGrade(85));
console.log(ticketPrice(70));
console.log(canEnter(15, true));
console.log(canEnter(10, true));

//Bonus:
function letterGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid";
  }
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log("letterGrade(101) =", letterGrade(101));
console.log("letterGrade(-1) =", letterGrade(-1));