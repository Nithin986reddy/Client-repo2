<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Form</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-box {
      background: #ffffff;
      padding: 25px;
      border-radius: 8px;
      width: 300px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .login-box h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .login-box input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .login-box button {
      width: 100%;
      padding: 10px;
      background: #0078d4;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .login-box button:hover {
      background: #005a9e;
    }

    .error {
      color: red;
      font-size: 13px;
      margin-top: 10px;
      text-align: center;
    }
  </style>

  <script>
    function validateLogin() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      errorMsg.innerHTML = "";

      if (username === "") {
        errorMsg.innerHTML = "Username is required.";
        return false;
      }

      if (password === "") {
        errorMsg.innerHTML = "Password is required.";
        return false;
      }

      if (password.length < 6) {
        errorMsg.innerHTML = "Password must be at least 6 characters.";
        return false;
      }

      // ✅ All validations passed
      alert("Login validation successful!");
      return true;
    }
  </script>
</head>

<body>

  <div class="login-box">
    <h2>Login</h2>

    <form onsubmit="return validateLogin()">
      <input type="text" id="username" placeholder="Username">
      <input type="password" id="password" placeholder="Password">
      <button type="submit">Login</button>
      <div id="errorMsg" class="error"></div>
    </form>
  </div>

</body>
</html>