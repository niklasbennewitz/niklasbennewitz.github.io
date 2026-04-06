// JavaScript Document
		function validate(){
			if ( ( document.emailForm.text.value == "" ) || ( document.emailForm.email.value.search("@") == -1 ) || ( document.emailForm.email.value.search("[.*]" ) == -1 ) ) {
				alert( "Please make sure everything is filled out properly!" );
			} else if ( ( document.emailForm.email.value.search(";") != -1 ) || ( document.emailForm.email.value.search(",") != -1 ) || ( document.emailForm.email.value.search(" ") != -1 ) ) {
				alert( "You can't fill in more than one e-mail-address!" );
			} else {
				document.emailForm.action = "kontakt-antwort.php"
				document.emailForm.submit();
			}
		}