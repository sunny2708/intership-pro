
	  // Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
	  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries

	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  const firebaseConfig = {
        apiKey: "AIzaSyCl7WfA48DmwTxS8tXAi15WwK4xwrdJvBU",
        authDomain: "login-da81b.firebaseapp.com",
        projectId: "login-da81b",
        storageBucket: "login-da81b.appspot.com",
        messagingSenderId: "885505241256",
        appId: "1:885505241256:web:ced6ecfbbdfa52ff56929d",
        measurementId: "G-SXM2PZPJX7"
      };

	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const auth = getAuth();
	  console.log(app);

	  
  //----- New Registration code start	  
  document.getElementById("signup").addEventListener("click", function() {
	var email =  document.getElementById("email").value;
	var password = document.getElementById("password").value;
	//For new registration
	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
	  // Signed in 
	  const user = userCredential.user;
	  console.log(user);
	  alert("Registration successfully!!");
	  // ...
	})
	.catch((error) => {
	  const errorCode = error.code;
	  const errorMessage = error.message;
	  // ..
	  console.log(errorMessage);
	  alert(error);
	});		  		  
});
//----- End

//----- Login code start	  
document.getElementById("login1").addEventListener("click", function() {
	var email =  document.getElementById("login_email").value;
	var password = document.getElementById("login_password").value;

	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
	  // Signed in 
	  const user = userCredential.user;
	  console.log(user);
	  window.location.href = "index.html";
	  alert(user.email+" Login successfully!!!");
	  
	  
	  // ...
	})
	.catch((error) => {
	  const errorCode = error.code;
	  const errorMessage = error.message;
	  console.log(errorMessage);
	  alert(errorMessage);
	});		  		  
});
