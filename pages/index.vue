<template>
  <div class="flex items-center justify-center space-x-8 min-h-screen overflow-x-hidden">
  <div class=" max-w-7xl mx-auto px-4 md:px-8 ">
    <!-- Top Cards in centered grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6  max-w-7xl" style="margin-top: 80px;">
      <Card
        v-for="(item, index) in cardData"
        :key="index"
        :title="item.title"
        :description="item.description"
        :importance="item.importance"
        :usage="item.usage"
      />
    </div>

    <!-- Revenue Cards -->
    <div class="max-w-7xl mx-auto " style="margin-top:30px;">
      <div class="grid grid-cols-12 gap-6 ">
        <!-- First RevenueCard - wider -->
        <div class="col-span-12 md:col-span-8">
          <RevenueCard />
        </div>

        <!-- Second RevenueCard - narrower -->
        <div class="col-span-12 md:col-span-4">
          <SalesCard/>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto " style="margin-top:30px;">
      <div class="grid grid-cols-12 gap-6 ">
        <!-- First RevenueCard - wider -->
        <div class="col-span-12 md:col-span-4">
          <Mygarages />
        </div>

        <!-- Second RevenueCard - narrower -->
        <div class="col-span-12 md:col-span-8">
          <Products />
        </div>
      </div>
    </div>
  </div>
</div>
</template>




<script setup>
import Card from "../components/cardAdmin.vue";
import RevenueCard from "~/components/revenueCard.vue";
import { ref } from "vue";
import Mygarages from "~/components/mygarages.vue";
import Products from "~/components/products.vue";
import SalesCard from "~/components/salesCard.vue";

const cardData = [
  {
    title: 'Need a help in Claim?',
    description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
  },
  {
    title: 'Need help with Registration?',
    description: 'Follow these steps to successfully register for the program and start receiving your benefits.',
  },
  {
    title: 'Help with Document Submission?',
    description: 'This guideline will help you understand how to submit your required documents online.',
  }
]
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
