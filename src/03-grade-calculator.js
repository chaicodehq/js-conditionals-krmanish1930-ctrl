/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  let marks;

  if(score > 100 || score < 0){
    console.log("Enter valid marks");
    return -1;
  }

  if(score >= 90 && score <= 100){
    marks = score;
    console.log("A GRADE");
  } else if(score >= 80 && score <= 89){
    marks = score;
    console.log("B GRADE");
  } else if(score >= 70 && score <= 79){
    marks = score;
    console.log("C GRADE");
  } else if(score >= 60 && score <= 69){
    marks = score;
    console.log("D GRADE");
  } else {
    marks = score;
    console.log("F GRADE");
  }

  if(hasExtraCredit){
    if(marks > 95){
      marks = 100;
    } else {
      marks += 5;
    }
  }

  return marks;
}

console.log(calculateGrade(60, false)); 
