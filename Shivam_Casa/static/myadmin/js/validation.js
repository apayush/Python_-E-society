function validation()
{
	var count = 0;
	var name = document.getElementById('name').value;

	if(name == '')
	{
		// alert('Please Enter Name');
		// document.write('Please Enter Name');
		document.getElementById('error1').innerHTML='Please Enter Name';
		count++;
	}
	else
	{
		// alert(name);
		// document.write(name);
		document.getElementById('error1').innerHTML='';
	}

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

	var contact = document.getElementById('contact').value;
	if(contact == '')
	{
		document.getElementById('error3').innerHTML='Please Enter contact';
		count++;
	}
	else
	{
		document.getElementById('error3').innerHTML='';
	}

	var address = document.getElementById('address').value;
	if(address == '')
	{
		document.getElementById('error4').innerHTML='Please Enter address';
		count++;
	}
	else if(address.length<20)
	{
		document.getElementById('error4').innerHTML='Please Enter atleast 20 character';
		count++;
	}
	else
	{
		document.getElementById('error4').innerHTML='';
	}

	var city = document.getElementById('city').value;
	if(city == '')
	{
		document.getElementById('error5').innerHTML='Please Select City';
		count++;
	}
	else
	{
		document.getElementById('error5').innerHTML='';
	}

	var gender =document.getElementsByName('gender');
	if(gender[0].checked == false && gender[1].checked == false)
	{
		document.getElementById('error6').innerHTML='Please Select Gender';
		count++;
	}
	else
	{
		document.getElementById('error6').innerHTML='';
	}

	var ch = document.getElementsByName('edu[]');
	var total = ch.length;
	var temp = 0;

	for(i=0;i<total;i++)
	{
		if(ch[i].checked == true)
		{
			temp++;
		}
	}
	if(temp<2)
	{
		document.getElementById('error7').innerHTML='Please Select atleast Two';
		count++;
	}
	else
	{
		document.getElementById('error7').innerHTML='';

	}


	if(count > 0)
	{
		return false;
	}
}