const registrationForm = document.getElementById("registration-form");
const loginForm = document.getElementById("login-form");
const userInfo = document.getElementById("user-info");

const registerButton = document.getElementById("register-button");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");

const userEmail = document.getElementById("user-email");

// Registration
registerButton.addEventListener("click", async () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    alert("Registration successful! Please check your email for verification.");
  } catch (error) {
    alert("Registration failed. " + error.message);
  }
});

// Login
loginButton.addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    alert("Login failed. " + error.message);
  }
});

// Logout
logoutButton.addEventListener("click", async () => {
  await firebase.auth().signOut();
});

// Authentication State Change Listener
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    registrationForm.style.display = "none";
    loginForm.style.display = "none";
    userInfo.style.display = "block";
    userEmail.textContent = user.email;
  } else {
    // User is signed out
    registrationForm.style.display = "block";
    loginForm.style.display = "block";
    userInfo.style.display = "none";
    userEmail.textContent = "";
  }
});
