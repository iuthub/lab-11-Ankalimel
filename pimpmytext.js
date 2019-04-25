function clickBtn(){
	document.getElementById("textid").style.fontSize = "24pt";
}

function clickChk(){
	var checkbox = document.getElementById("textid");
	if (checkbox.checked = true){
		checkbox.style.color = "green";
		checkbox.style.backgroundColor = "yellow";
		checkbox.style.fontFamily = "Comic Sans MS";
		checkbox.style.fontWeight = "bold";
		checkbox.style.textDecoration = "underline blink";
	}
}

function clickBtnSn(){
	document.getElementById("textid").style.textTransform = "uppercase";
	document.getElementById("textid").value+="!";
	var str=document.getElementById("textid").value;
	var parts=str.split(".");
	str=parts.join("-izzle");
	document.getElementById("textid").value=str;
}