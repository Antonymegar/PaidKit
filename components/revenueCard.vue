<template>
    <div class="w-full h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="px-5 pb-5">
            <div  v-if="isClient" class="mt-8">
                <ApexChart :options="chartOptions" :series="chartSeries" type="line" height="350" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const ApexChart = defineAsyncComponent(() => {
  if (typeof window !== 'undefined') {
    return import('vue3-apexcharts');
  }
});

const isClient = ref(false);

onMounted(() => {
  if (typeof window !== 'undefined') {
    isClient.value = true;
  }
})
const chartOptions = ref({
    chart: {
        id: 'sales-chart',
        toolbar: {
            show: false
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
        title: {
            text: 'Sales ($)',
        },
    },
    stroke: {
        curve: 'smooth',
    },
    title: {
        text: 'Monthly Sales Data',
        align: 'center',
    },
});

const chartSeries = ref([
    {
        name: 'Sales',
        data: [1200, 1500, 1700, 1100, 1300, 1900, 2200, 2300, 2100, 2400, 2500, 2600]
    },
]);
</script>

<style scoped></style>