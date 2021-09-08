//get all buttons
//add eventlistener

const colors = ["yellow", "purple", "green", "pink", "blue"];

const bf = document.getElementById("firstbutton");
const bs = document.getElementById("secondbutton");
const bt = document.getElementById("thirdbutton");
const bfh = document.getElementById("fourthbutton");
const bfv = document.getElementById("fifthbutton");

bf.addEventListener("click", () => {
	document.body.style.backgroundColor = colors[0];
});
bs.addEventListener("click", () => {
	document.body.style.backgroundColor = colors[1];
});
bt.addEventListener("click", () => {
	document.body.style.backgroundColor = colors[2];
});
bfh.addEventListener("click", () => {
	document.body.style.backgroundColor = colors[3];
});
bfv.addEventListener("click", () => {
	document.body.style.backgroundColor = colors[4];
});
