<template>
  <div>
    <div class="side-navbar" :class="{ 'side-navbar--collapsed': collapsed }">
      <div class="collapse-btn" @click="toggleSidebar">
        <i style="font-size: 1.5rem" :class="collapsed ? 'pi pi-angle-double-right' : 'pi pi-angle-double-left'"></i>
      </div>

      <ul class="menu-items">
        <li>
          <NuxtLink to="/dashboard">
            <i class="pi pi-home" style="font-size: 1.5rem; color: slateblue; margin-right: 15px;"></i>
            <span v-if="!collapsed">Dashboard</span>
          </NuxtLink>
        </li>
        <li class="flex items-center justify-between">
          <NuxtLink to="/orders" class="flex-grow">
            <i class="pi pi-chart-line" style="font-size: 1.5rem; color: green; margin-right: 15px;"></i>
            <span v-if="!collapsed">Teams</span>
          </NuxtLink>
          <button v-if="!collapsed" 
                  @click="showTeamDialog = true" 
                  class="p-2 hover:bg-gray-100 rounded-full">
            <i class="pi pi-plus" style="font-size: 1.2rem; color: green;"></i>
          </button>
        </li>
        <li class="flex items-center justify-between">
          <NuxtLink to="/products" class="flex-grow">
            <i class="pi pi-warehouse" style="font-size: 1.5rem; color: #708090; margin-right: 15px;"></i>
            <span v-if="!collapsed">Tasks</span>
          </NuxtLink>
          <button v-if="!collapsed" 
                  @click="showTaskDialog = true" 
                  class="p-2 hover:bg-gray-100 rounded-full">
            <i class="pi pi-plus" style="font-size: 1.2rem; color: #708090;"></i>
          </button>
        </li>
        <li>
          <NuxtLink to="/products">
            <i class="pi pi-users" style="font-size: 1.5rem; color: #708090; margin-right: 15px;"></i>
            <span v-if="!collapsed">Customers</span>
          </NuxtLink>
        </li>
      </ul>

      <!-- Profile Section -->
      <div class="profile-section" :class="{ 'profile-section--collapsed': collapsed }">
        <div class="profile-trigger" @click="toggleProfileMenu">
          <div class="flex items-center">
            <div class="profile-avatar">
              <img :src="user.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'" 
                   alt="Profile" 
                   class="rounded-full w-10 h-10" />
            </div>
            <div v-if="!collapsed" class="profile-info ml-3">
              <p class="font-medium text-gray-800">{{ user.name }}</p>
              <p class="text-sm text-gray-500">{{ user.email }}</p>
            </div>
            <i v-if="!collapsed" 
               class="pi pi-chevron-down ml-2" 
               :class="{ 'transform rotate-180': showProfileMenu }">
            </i>
          </div>
        </div>

        <!-- Profile Dropdown Menu -->
        <div v-if="showProfileMenu && !collapsed" 
             class="profile-menu">
          <div class="px-4 py-3 border-b border-gray-200">
            <p class="text-sm font-medium text-gray-800">Signed in as</p>
            <p class="text-sm text-gray-500">{{ user.email }}</p>
          </div>
          <ul>
            <li>
              <button @click="navigateToAccount" class="profile-menu-item">
                <i class="pi pi-user mr-2"></i>
                Account
              </button>
            </li>
            <li>
              <button @click="navigateToNotifications" class="profile-menu-item">
                <i class="pi pi-bell mr-2"></i>
                Notifications
                <span class="notification-badge">3</span>
              </button>
            </li>
            <li class="border-t border-gray-200">
              <button @click="handleLogout" class="profile-menu-item text-red-600">
                <i class="pi pi-sign-out mr-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Team Dialog -->
    <Dialog v-model:visible="showTeamDialog" 
            modal 
            header="Create New Team" 
            :style="{ width: '25rem'}">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="teamName" class="font-medium">Team Name</label>
          <InputText id="teamName" v-model="newTeam.name" placeholder="Enter team name" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="teamDescription" class="font-medium">Description</label>
          <Textarea id="teamDescription" 
                   v-model="newTeam.description" 
                   placeholder="Enter team description" 
                   rows="3" />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Cancel" 
                 @click="showTeamDialog = false" 
                 class="p-button-text" />
          <Button label="Create Team" 
                 @click="createTeam" 
                 class="p-button-primary" />
        </div>
      </template>
    </Dialog>

    <!-- Task Dialog -->
    <Dialog v-model:visible="showTaskDialog" 
            modal 
            header="Create New Task" 
            :style="{ width: '450px' }">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="taskName" class="font-medium">Task Name</label>
          <InputText id="taskName" v-model="newTask.name" placeholder="Enter task name" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="taskDescription" class="font-medium">Description</label>
          <Textarea id="taskDescription" 
                   v-model="newTask.description" 
                   placeholder="Enter task description" 
                   rows="3" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="taskDueDate" class="font-medium">Due Date</label>
          <Calendar id="taskDueDate" 
                   v-model="newTask.dueDate" 
                   dateFormat="dd/mm/yy" />
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Cancel" 
                 @click="showTaskDialog = false" 
                 class="p-button-text" />
          <Button label="Create Task" 
                 @click="createTask" 
                 class="p-button-primary" />
        </div>
      </template>
    </Dialog>

    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import Dialog from 'primevue/dialog';
// import Button from 'primevue/button'
// import InputText from 'primevue/inputtext'
// import Textarea from 'primevue/textarea'
// import Calendar from 'primevue/calendar'

const collapsed = ref(false);
const showTeamDialog = ref(false);
const showTaskDialog = ref(false);
const showProfileMenu = ref(false);

// Mock user data - replace with actual user data from your auth system
const user = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: null
});

const newTeam = ref({
  name: '',
  description: ''
});

const newTask = ref({
  name: '',
  description: '',
  dueDate: null
});

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
  if (collapsed.value) {
    showProfileMenu.value = false;
  }
};

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
};

const createTeam = () => {
  console.log('Creating team:', newTeam.value);
  showTeamDialog.value = false;
  newTeam.value = {
    name: '',
    description: ''
  };
};

const createTask = () => {
  console.log('Creating task:', newTask.value);
  showTaskDialog.value = false;
  newTask.value = {
    name: '',
    description: '',
    dueDate: null
  };
};

const navigateToAccount = () => {
  // Implement navigation to account page
  console.log('Navigating to account page');
  showProfileMenu.value = false;
};

const navigateToNotifications = () => {
  // Implement navigation to notifications page
  console.log('Navigating to notifications page');
  showProfileMenu.value = false;
};

const handleLogout = () => {
  // Implement logout logic
  console.log('Logging out');
  showProfileMenu.value = false;
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
  width: 200px;
  height: 100vh;
  background-color:#fff;
  position: fixed;
  border-right: 2px solid #ebebeb;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
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
  flex-grow: 1;
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

/* Profile Section Styles */
.profile-section {
  border-top: 1px solid #ebebeb;
  padding: 1rem;
  margin-top: auto;
  position: relative;
}

.profile-section--collapsed {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
}

.profile-trigger {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.profile-trigger:hover {
  background-color: #f3f4f6;
}

.profile-menu {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ebebeb;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0.5rem;
}

.profile-menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: background-color 0.2s;
}

.profile-menu-item:hover {
  background-color: #f3f4f6;
}

.notification-badge {
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  margin-left: auto;
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