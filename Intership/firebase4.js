import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
	  import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
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
document.getElementById("logou").addEventListener("click", function() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        window.location.assign("index.html")
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
      }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
      });		  		  
});

