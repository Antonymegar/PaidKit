<template>
    <div class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Top Performing Products</h5>

            <!-- Scrollable container for the product list -->
            <div class="max-h-[400px] overflow-y-auto scrollbar-hidden  mt-4">
                <div v-for="(product, index) in topProducts" :key="index">
                    <!-- Product Item -->
                    <div
                        class="flex justify-between items-center py-4 px-2 border-b border-gray-200 dark:border-gray-600">
                        <div class="flex flex-col">
                            <span class="font-medium text-gray-900 dark:text-white">{{ product.name }}</span>
                            <span class="text-sm text-gray-600 dark:text-gray-400">{{ product.description }}</span>
                        </div>
                        <span class="text-lg font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Sample data for the top-performing products
const topProducts = ref([
    {
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        description: 'The latest Apple Watch with advanced features.',
        price: 399,
    },
    {
        name: 'Samsung Galaxy Watch 5',
        description: 'A premium smart watch with health tracking features.',
        price: 299,
    },
    {
        name: 'Fitbit Charge 5',
        description: 'An advanced fitness tracker with built-in GPS.',
        price: 179,
    },
    {
        name: 'Garmin Forerunner 945',
        description: 'A GPS smartwatch for athletes and adventurers.',
        price: 599,
    },
    {
        name: 'Oura Ring Generation 3',
        description: 'A stylish ring that tracks your health metrics.',
        price: 299,
    },
]);
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}


.scrollbar-hidden {
  scrollbar-width: none; 
}
</style>