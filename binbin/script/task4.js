var cont = document.getElementById("container");
var inputText = "";

function addLeftNum() {
	inputText = document.getElementById("input-text").value;
	var insertDiv = document.createElement("div");
	insertDiv.innerHTML = inputText;
	cont.insertBefore(insertDiv, cont.firstChild);
	//给节点添加点击删除事件
	insertDiv.onclick=function(){
		//this.style.display="none";
		this.parentNode.removeChild(this);
	}
	document.getElementById("input-text").value = "";

}

function addRightNum() {
	inputText = document.getElementById("input-text").value;
	var insertDiv = document.createElement("div");
	insertDiv.innerHTML = inputText;
	cont.appendChild(insertDiv);
	//给节点添加点击删除事件
	insertDiv.onclick=function(){
		//this.style.display="none";
		this.parentNode.removeChild(this);
	}
	document.getElementById("input-text").value = "";
}

function delLeftNum() {
	cont.removeChild(cont.firstChild);
}

function delRightNum() {
	cont.removeChild(cont.lastChild);
}

//各个按钮绑定点击事件
function addBtnHandle() {
	var inp = document.getElementsByTagName("input");
	inp[1].onclick = addLeftNum;
	inp[2].onclick = addRightNum;
	inp[3].onclick = delLeftNum;
	inp[4].onclick = delRightNum;
}
addBtnHandle();
