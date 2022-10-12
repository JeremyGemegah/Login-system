
/*alert("good");*/
var pass_field = document.getElementById("pass_field");
var in_errp = document.getElementById("in-errp");
var in_err = document.getElementById("in-err");
let email= document.forms["Regform"]["email"];
let pass = document.forms["Regform"]["password"];
let passr = document.forms["Regform"]["passwordr"];
var mess = document.getElementById("mess");
var button = document.getElementById("button");
var page=1;
var allow =0;

/*alert(ddd.innerHTML);*/


/* password error message */

pass_field.addEventListener("input",function(){
	if (pass_field.value.length<9) {
	in_errp.style.display="block";

	if (pass_field.value.length == 0) {
	in_errp.style.display="none";
}

} else{
	in_errp.style.display="none";
}



});

/* email error message */

email.addEventListener("focusout",function(){
	if (email.value.indexOf("@",0)>0 && email.value.indexOf(".",0)>email.value.indexOf("@",0)){
	in_err.style.display="none";

} else{
	in_err.style.display="block";
}

if (email.value.length == 0) {
	in_err.style.display="none";
}

});


function pass_show() {
	
	if (pass_field.type=="password") {
		pass_field.type ="text";
		

	}else {
		pass_field.type ="password";
		
	}
}

/* process link */



function process_link(){

var request = {};	

var pairs = location.search.substring(1).split("&");

for( var i=0;i< pairs.length;i++){
	var pair = pairs[i].split("=");
	request[pair[0]]=pair[1].replace("%40","@");
}

return request;

}


function verify(email,password){



	/* if both have values, we are verifying both */

	
	if (password==null) {
		if (email=="email@email.com") {
			return true;
		}else{
			return false
		}
	}else{
		if (email== "email@email.com" && password == "120") {
			return true;
		}else{
			return false;
		}
	}

	
  
}


function reset_pass_page(){

	document.getElementById("lhead").innerHTML="Reset password";
	document.getElementById("button").innerHTML="Reset password";

	// display 2 making a show
	document.getElementById("disp2").style.display="block";
	document.getElementById("disp1").style.display="none";
	document.getElementById("disp11").style.display="none";

	

}

function check_match(event){
	
	if (passr.value>0) {
		if (pass.value>0) {
			if (passr.value == pass.value) {
				document.getElementById("in-errm").style.color="#39b141ff";
				document.getElementById("in-errm").innerHTML="Password match";
				document.getElementById("in-errm").style.display="block";
				allow=1;

				button.disabled=false;
			}else{
				document.getElementById("in-errm").style.color="#aa0000ff";
				document.getElementById("in-errm").innerHTML="Password mismatch";
				document.getElementById("in-errm").style.display="block";
				allow=0;
				button.disabled=true;
			}
		}else{
			document.getElementById("in-errm").style.display="none";
			allow=0;
			button.disabled=true;
		}
	}else{
					document.getElementById("in-errm").style.display="none";
			allow=0;
			button.disabled=true;
	}
	

}

function pass_check(){
	if (pass.type =="password") {
		pass.type = "text";
		passr.type = "text";
	}else{
		pass.type="password";
		passr.type="password";
	}
}

function check_but(event){
	event.preventDefault();
	if (allow == 1) {
		location.href="welcome.html";
	}
}


function relocate(){
	location.href="welcome.html";
}



