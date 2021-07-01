"use strict";

function calculate(scores, units) {
  var n = scores.length;
  var sum = 0;

  for (var i = 0; i < n; i++) {
    sum += scores[i] * units[i];
  }

  var unitSum = units.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum / unitSum;
}

function execute(e) {
  e.preventDefault();
  var scoreList = document.querySelectorAll("input[name=score]");
  var unitList = document.querySelectorAll("input[name=unit]");
  var scores = Array.from(scoreList).map(function (el) {
    return Number(el.value);
  });
  var units = Array.from(unitList).map(function (el) {
    return Number(el.value);
  });
  var result = calculate(scores, units);
  document.querySelector("input[name=result]").value = result;
}

function add(e) {
  e.preventDefault();
  var classesDiv = document.getElementById("classes");
  var scoreLabel = document.createElement("label");
  scoreLabel.setAttribute("for", "score");
  scoreLabel.textContent = "성적";
  var scoreInput = document.createElement("input");
  scoreInput.setAttribute("name", "score");
  scoreInput.setAttribute("type", "text");
  var unitLabel = document.createElement("label");
  unitLabel.setAttribute("for", "unit");
  unitLabel.textContent = "단위수";
  var unitInput = document.createElement("input");
  unitInput.setAttribute("name", "unit");
  unitInput.setAttribute("type", "text");
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "line");
  newDiv.append(scoreLabel, scoreInput, unitLabel, unitInput);
  classesDiv.appendChild(newDiv);
}