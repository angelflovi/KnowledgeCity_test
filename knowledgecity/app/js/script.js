/// Username and password validation function ///// 
function validate(){
	cad='';	
	if ($("#user").val()=='')
		cad+="The user is empty \n";
	
	if ($("#password").val()=='')
		cad+="The password is empty \n"
			
		// Send message
	if (cad!=''){
		alert(cad);	
		return false;
	}else{
		Searchuser(); //Function		
	}
		
}

/// Login function POST///// 
function Searchuser()
{
	$.ajax(
		   {
			url: "app/php/php_api.php",
		    async:true,
			data:"REQUEST_METHOD='POST'"+"&iduser="+$("#user").val()+"&idpassword="+$("#password").val(),
			contentType: "application/x-www-form-urlencoded",
        	dataType: "json",
			error: function(object, hapen, oobj){
            alert("Follow: "+hapen);
        	},		
			global: true,
        	ifModified: false,
        	processData:true,
        	success: function(data){
				if(data!==undefined){
					  if (data=='true')
					  {
						  window.location="list.html";
					  }
					  else{	
					  	  alert (data);
					  }
				}		
			},
        	timeout: 150000,
        type: "POST"
	});// Ajax End
}

/// Load table function GET///// 
function load_table()
{
	$.ajax(
		   {
			url: "app/php/php_api.php",
		    async:true,
			data:"REQUEST_METHOD='GET'",
			contentType: "application/x-www-form-urlencoded",
        	dataType: "json",
			error: function(object, hapen, oobj){
            alert("Follow: "+hapen);
        	},		
			global: true,
        	ifModified: false,
        	processData:true,
        	success: function(data){
				$(document).ready(function() {
    		$('#myTable').DataTable({
    		pageLength : 5,
			ordering: false
    			});
			});				
			$("#myCont").html(data.table);				
			},
        	timeout: 150000,
        type: "GET"
	});// Ajax End
}

/// Log out function DELETE/////
function logout()
{
	$.ajax(
		   {
			url: "app/php/php_api.php",
		    async:true,
			data:"REQUEST_METHOD='DELETE'",
			contentType: "application/x-www-form-urlencoded",
        	dataType: "json",
			error: function(object, hapen, oobj){
            alert("Follow: "+hapen);
        	},		
			global: true,
        	ifModified: false,
        	processData:true,
        	success: function(data){
			if(data!==undefined){
				if (data!='true')
				{
					window.location="login.html";
				}
			}					
			},
        	timeout: 150000,
        type: "DELETE"
	});// Ajax End	
}

/// Session function ///// 
function session()
{
	$.ajax(
		   {
			url: "app/php/php_sesion.php",
		    async:true,
			data:"REQUEST_METHOD='GET'",
			contentType: "application/x-www-form-urlencoded",
        	dataType: "json",
			error: function(object, hapen, oobj){
            alert("Follow: "+hapen);
        	},		
			global: true,
        	ifModified: false,
        	processData:true,
        	success: function(data){
			if(data!==undefined){
				if (data!='true')
				{
					window.location="login.html";
				}
			}					
			},
        	timeout: 150000,
        type: "GET"
	});// Ajax End
}

///Remenember function
$(function() { 
      if (localStorage.chkbx && localStorage.chkbx != '') {
         $('#remember').attr('checked', 'checked');
         $('#user').val(localStorage.usrname);
         $('#password').val(localStorage.pass);
      } else {
             $('#remember').removeAttr('checked');
             $('#user').val('');
             $('#password').val('');
             }
 
       $('#remember').click(function() {
 
       if ($('#remember').is(':checked')) {
       // save username and password
       localStorage.usrname = $('#user').val();
       localStorage.pass = $('#password').val();
       localStorage.chkbx = $('#remember').val();
       } else {
               localStorage.usrname = '';
               localStorage.pass = '';
               localStorage.chkbx = '';
               }
        });
});