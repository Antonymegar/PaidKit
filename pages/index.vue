<template>
<h1>Dashboard</h1>
</template>




<script setup>
import { ref } from "vue";

// definePageMeta({
//   layout: "default",
// });
</script>

<style scoped>
/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and general layout */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #333;
  color: #fff;
}

.navbar .logo a {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links li {
  list-style-type: none;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff6347; /* Tomato color on hover */
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile .avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}

.profile .username {
  font-size: 16px;
  color: #fff;
}

.logout-btn {
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #e03e33; /* Darker tomato on hover */
}

/* Responsive Styling */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    margin-top: 15px;
    flex-direction: column;
    gap: 10px;
  }

  .profile {
    margin-top: 15px;
  }
}
</style>
