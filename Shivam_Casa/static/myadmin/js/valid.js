function valid()
{
	var count = 0;
	var name = document.getElementById('name').value;
	if(name == '')
	{
		document.getElementById('error1').innerHTML='Please enter name';
		count++;
	}
	else
	{
		document.getElementById('error1').innerHTML='';
	}

	// ==========================================================================

	var email = document.getElementById('email').value;
	if(email == '')
	{
		document.getElementById('error2').innerHTML='Please Enter Email';
		count++;
	}
	else
	{
		document.getElementById('error2').innerHTML='';
	}

	//=============================================================================

	var contact = document.getElementById('contact').value;

	if(contact == '')
	{
		document.getElementById('error3').innerHTML='please enter valid contact no.';
		count++;
	}
	else if(contact.length < 10)
	{
		document.getElementById('error3').innerHTML='please enter valid contact no.';
		count++;
	}
	else if(contact.length > 10)
	{
		document.getElementById('error3').innerHTML='please enter valid contact no.';
		count++;
	}
	else
	{
		document.getElementById('contact').innerHTML=('');
	}

	//==================================================================================

	var date = document.getElementById('date').value;

	if(date == '')
	{
		document.getElementById('error4').innerHTML='please enter valid date';
		count++;
	}
	else if()
	{
		document.getElementById('error4').innerHTML='please enter valid date';
		count++;
	}
	else
	{
		document.getElementById('date').innerHTML=('');
	}

	if(count > 0)
	{
		return false;
	}
}