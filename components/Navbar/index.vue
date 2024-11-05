<template>
  <div>
    <!-- Sidebar -->
    <div class="side-navbar" :class="{ 'side-navbar--collapsed': collapsed }">
      <!-- Collapse Button (Arrow Icon) -->
      <div class="collapse-btn" @click="toggleSidebar">
        <i  style="font-size: 1.5rem" :class="collapsed ? 'pi pi-angle-double-right' : 'pi pi-angle-double-left'"></i>
      </div>

      <!-- Menu Items (Visible only when sidebar is not collapsed) -->
      <ul class="menu-items">
        <!-- Dashboard Item -->
        <li>
          <NuxtLink to="/">
            <i class="pi pi-home" style="font-size: 1.5rem; color: slateblue; margin-right: 15px;"></i>
            <span v-if="!collapsed">Dashboard</span>
          </NuxtLink>
        </li>
        <!-- Progress Item -->
        <li>
          <NuxtLink to="/progress">
            <i class="pi pi-chart-line" style="font-size: 1.5rem; color: green; margin-right: 15px;"></i>
            <span v-if="!collapsed">Progress</span>
          </NuxtLink>
        </li>
        <!-- Members Item -->
        <li>
          <NuxtLink to="/members">
            <i class="pi pi-users" style="font-size: 1.5rem; color: #708090; margin-right: 15px;"></i>
            <span v-if="!collapsed">Members</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Main content area -->
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const collapsed = ref(false);

// Toggle Sidebar Visibility
const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



/* Sidebar Styles */
.side-navbar {
  padding: 0;
  margin: 0;
  width: 250px;
  height: 100vh;
  background-color:#fff;
  position: fixed;
  border-right: 2px solid #ebebeb;
  transition: all 0.3s ease;
}

.side-navbar--collapsed {
  width: 80px;
  background-color:white;
}

.logo {
  padding: 20px;
  background-color: #222;
  text-align: center;
  font-size: 1.8rem;
  color: white;
}

.menu-items {
  list-style: none;
  margin-top: 60px;
}

.menu-items li {
  padding: 15px;
  text-align: left;
}

.menu-items li a {
  text-decoration: none;
  color: #333;
  display: block;
  font-size: 1.1rem;
  padding: 10px 20px;
  transition: background-color 0.3s;
}

.menu-items li a:hover {
  background-color: #ddd;
}

/* Collapse Button (Arrow Icon) */
.collapse-btn {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  color: #333;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.collapse-btn:hover {
  color: #555;
}

/* Main Content Area */
.main-content {
  margin-left: 250px;
  padding: 20px;
  flex: 1;
}

/* Adjust main content when sidebar is collapsed */
.side-navbar--collapsed + .main-content {
  margin-left: 80px;
}
</style>
