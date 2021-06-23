function calculate(scores, units) {
  let n = scores.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += scores[i] * units[i];
  }
  let unitSum = units.reduce((a, b) => a + b, 0);
  return sum / unitSum;
}

function execute(e) {
  e.preventDefault();
  const scoreList = document.querySelectorAll("input[name=score]");
  const unitList = document.querySelectorAll("input[name=unit]");
  const scores = Array.from(scoreList).map((el) => Number(el.value));
  const units = Array.from(unitList).map((el) => Number(el.value));
  const result = calculate(scores, units);
  document.querySelector("input[name=result]").value = result;
}

function add(e) {
  e.preventDefault();
  const classesDiv = document.getElementById("classes");
  const scoreLabel = document.createElement("label");
  scoreLabel.setAttribute("for", "score");
  scoreLabel.textContent = "성적";
  const scoreInput = document.createElement("input");
  scoreInput.setAttribute("name", "score");
  scoreInput.setAttribute("type", "text");
  const unitLabel = document.createElement("label");
  unitLabel.setAttribute("for", "unit");
  unitLabel.textContent = "단위수";
  const unitInput = document.createElement("input");
  unitInput.setAttribute("name", "unit");
  unitInput.setAttribute("type", "text");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "line");
  newDiv.append(scoreLabel, scoreInput, unitLabel, unitInput);
  classesDiv.appendChild(newDiv);
}
