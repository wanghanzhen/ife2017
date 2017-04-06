var cont = document.getElementById("container");
var textContent = "";

//插入
function insert() {
	textContent = document.getElementById("content").value;
	var textArr=textContent.split(/[,，、\n\s\t]/);
	console.log(textArr);
	for (var i = 0; i < textArr.length; i++) {
		var insertDiv = document.createElement("div");
		insertDiv.innerHTML=textArr[i];
		cont.appendChild(insertDiv);
		console.log(insertDiv);
	}
}

//查询
function inquire(){
	var inquireText=document.getElementById("inquire-text").value;
	var allDiv=cont.getElementsByTagName("div");
	var j=0; //用于判断是否匹配到
	for (var i = 0; i < allDiv.length; i++) {
		if(allDiv[i].innerHTML.indexOf(inquireText)!=-1){
			allDiv[i].style.color="red";
			j++;
		}
	}
	if(j==0){
		alert("查询不到！");
	}
}

//添加按钮事件
function init(){
	var insertBtn=document.getElementById("insert-btn");
	var inquireBtn=document.getElementById("inquire-btn");
	insertBtn.onclick=insert;
	inquireBtn.onclick=inquire;
}
init();
