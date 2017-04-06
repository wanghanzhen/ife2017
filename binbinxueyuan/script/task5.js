var cont = document.getElementById("container");
var inputText = "";

function addLeftNum() {
	inputText = document.getElementById("input-text").value;
	var insertDiv = document.createElement("div");
	//insertDiv.innerHTML = inputText;
	//判断输入数的大小是否符合
	if(!transValue(inputText)){
		return;
	}
	insertDiv.style.height = inputText + "px";
	var len = cont.getElementsByTagName("div").length;
	if (len >= 60) {
		alert("队列满了");
	} else {
		cont.insertBefore(insertDiv, cont.firstChild);
	}
	//给节点添加点击删除事件
	clickDel(insertDiv);
	document.getElementById("input-text").value = "";

}

function addRightNum() {
	inputText = document.getElementById("input-text").value;
	var insertDiv = document.createElement("div");
	//insertDiv.innerHTML = inputText;
	//判断输入数的大小是否符合
	if(!transValue(inputText)){
		return;
	}
	insertDiv.style.height = inputText + "px";
	var len = cont.getElementsByTagName("div").length;
	if (len >= 60) {
		alert("队列满了");
	} else {
		cont.appendChild(insertDiv);
	}
	//给节点添加点击删除事件
	clickDel(insertDiv);
	document.getElementById("input-text").value = "";
}

function transValue(inputText) {
    var result = parseInt(inputText.replace(/\D/g, ""), 10);

    if(result > 100 || result < 10) {
        alert("必须为10-100的整数！");
        return false;
    }
    return result;
};

function clickDel(el) {
	el.onclick = function() {
		//this.style.display="none";
		this.parentNode.removeChild(this);
	}
}

function swap(ele1, ele2) {
	var temp = ele1.offsetHeight;

	ele1.offsetHeight = ele2.offsetHeight;
	ele1.style.height = ele2.offsetHeight + "px";
	ele2.offsetHeight = temp;
	ele2.style.height = temp + "px";

	// 如果只是相邻元素swap，可以使用下面这个方法直接交换dom元素
	// 但是考虑到非冒泡排序算法使用swap时不一定是交换相邻元素(比
	// 如插入排序)，所以使用交换高度的方法。注意ele.style.height
	// 和ele.offsetHeight都需要互换

	// ele1.parentNode.insertBefore(ele2, ele1);
};
//冒泡排序
function bubbleSort() {
	var allDiv = cont.getElementsByTagName("div");
	var j = 0,
		i = 0;
	ftime = setInterval(function() {
		if (i == allDiv.length - 1) {
			clearInterval(ftime);
		}
		if (j == allDiv.length - i - 1) {
			j = 0;
			i++;
		}
		if (allDiv[j].offsetHeight > allDiv[j + 1].offsetHeight) {
			swap(allDiv[j], allDiv[j + 1]);
		}
		j++;
	}, 100)
}

//各个按钮绑定点击事件
function addBtnHandle() {
	var inp = document.getElementsByTagName("input");
	inp[1].onclick = addLeftNum;
	inp[2].onclick = addRightNum;
	inp[3].onclick = function() {
		cont.removeChild(cont.firstChild);
	}
	inp[4].onclick = function() {
		cont.removeChild(cont.lastChild);
	}
	inp[5].onclick = bubbleSort;
}
addBtnHandle();