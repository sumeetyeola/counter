let count = 0;
document.getElementById("incrementBtn").onclick = function () {
  count += 1;
  document.getElementById("count").innerHTML = count;
};

document.getElementById("decrementBtn").onclick = function () {
  count -= 1;
  document.getElementById("count").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("count").innerHTML = count;
};
