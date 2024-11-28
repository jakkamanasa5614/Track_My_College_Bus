document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Redirect to appropriate dashboard based on role
        if (data.role === "driver") {
          window.location.href = "/dashboard/driver.html";
        } else if (data.role === "student") {
          window.location.href = "/dashboard/student.html";
        } else if (data.role === "employee") {
          window.location.href = "/dashboard/employee.html";
        }
      } else {
        const error = await response.json();
        document.getElementById("error").textContent = error.message;
        document.getElementById("error").style.display = "block";
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  });
  