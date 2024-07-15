function login() {
  var adminId = document.getElementById("adminId").value;
  var adminPassword = document.getElementById("adminPassword").value;

  var validAdminId = "admin";
  var validAdminPassword = "password123";

  if (adminId === validAdminId && adminPassword === validAdminPassword) {
    window.location.href = "../views/home.html"; // Replace with the URL of the page you want to navigate to
  } else {
    alert("Invalid Admin Id or Password");
  }
}
