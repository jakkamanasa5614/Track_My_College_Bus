

var emp_username = document.forms['form']['emp_username'];
var emp_password = document.forms['form']['emp_password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

emp_username.addEventListener('textInput', email_Verify);
emp_password.addEventListener('textInput', pass_Verify);

function validated(){
	if (emp_username.value.length < 10) {
		emp_username.style.border = "1px solid red";
		email_error.style.display = "block";
		emp_username.focus();
		return false;
	}
	if (emp_password.value.length < 6) {
		emp_password.style.border = "1px solid red";
		pass_error.style.display = "block";
		emp_password.focus();
		return false;
	}

}
function email_Verify(){
	if (emp_username.value.length >= 9) {
		emp_username.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (emp_password.value.length >= 5) {
		emp_password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}



