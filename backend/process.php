<?php
// Start session (optional, needed if login is successful)
session_start();

// Initialize error message
$error = "";

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Get and sanitize inputs
    $username = trim($_POST["username"] ?? "");
    $password = trim($_POST["password"] ?? "");

    // Validation
    if (empty($username)) {
        $error = "Username is required.";
    } 
    elseif (empty($password)) {
        $error = "Password is required.";
    } 
    elseif (strlen($password) < 6) {
        $error = "Password must be at least 6 characters.";
    } 
    else {
        // ✅ Validation passed
        // Here you usually check database credentials

        // Example only (DO NOT hardcode in real apps)
        if ($username === "admin" && $password === "admin123") {
            $_SESSION["username"] = $username;
            header("Location: dashboard.php");
            exit();
        } else {
            $error = "Invalid username or password.";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Login Result</title>
</head>
<body>

<?php if (!empty($error)): ?>
  <p style="color:red;"><?php echo $error; ?></p>
  <a href="index.html">Go Back</a>
<?php endif; ?>

</body>
</html>