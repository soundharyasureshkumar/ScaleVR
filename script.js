
var firebaseConfig = {
    apiKey: "AIzaSyBbtaVdbHR2aWapCqtnv9bogdKPcvwDf4I",
    authDomain: "login-f6ccf.firebaseapp.com",
    databaseURL: "https://login-f6ccf.firebaseio.com",
    projectId: "login-f6ccf",
    storageBucket: "login-f6ccf.appspot.com",
    messagingSenderId: "694269955161",
    appId: "1:694269955161:web:ea05a6d4c2c67823b4f548"
  };

  firebase.initializeApp(firebaseConfig);

	const auth = firebase.auth();
	function signup()
	{
		var email=document.getElementById("email");
		var password=document.getElementById("pass");
		var cpass=document.getElementById("cpass");
			const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
			promise.catch(e => alert(e.message));

			alert("Verifying credentials..");

		}
 function login()
 {
			var email=document.getElementById("email1");
			var password=document.getElementById("pass1");
				const promise = auth.signInWithEmailAndPassword(email.value, password.value);
				promise.catch(e => alert(e.message));

				alert("Login Success");
				window.location.href="upload.html";

		}
