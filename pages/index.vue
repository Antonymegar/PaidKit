<template>
    <Header />
    <div class="bg-gray-100"> 
    </div>
    <div >
      <section class="flex flex-col md:flex-row items-center py-20 px-8 mt-40">
        <div class="text-center md:text-left md:w-1/2 ml-4">
          <h1 class="text-5xl font-bold text-gray-900 t">
            Get Fast Spare Parts and Mods
          </h1>
          <h1 class="text-5xl font-bold text-gray-900 t mt-2">at your Fingertips</h1>
          <p class="text-gray-600 mt-4 max-w-2xl">
            Save your spare time with My Turbo Garage , Simple Easy and Fast.
          </p>
          <div class="mt-6 flex justify-center md:justify-start space-x-4">
            <button class="bg-blue-700 text-white px-6 py-3 rounded-lg">
              Get started
            </button>
            <button class="bg-gray-300 text-gray-900 px-6 py-3 rounded-lg">
              Learn more
            </button>
          </div>
        </div>
        <div class="mt-8 md:mt-0 md:w-1/2 flex justify-center mr-8">
          <video class="rounded-lg shadow-lg" controls>
            <source src="../public/porsche.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <!--Brands-->
      <section class="py-16 bg-white text-center overflow-hidden">
        <h2 class="text-3xl font-bold text-gray-900">Our Trusted Partner Brands</h2>
        <div class="px-4 lg:px-40 w-full overflow-hidden py-8">
          <div class="flex space-x-16 overflow-hidden">
            <div class="flex space-x-4 md:space-x-16 marquee">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-6W5D-Z0EE5B.webp?alt=media&token=c8a903f5-e2fe-497d-b81d-66dbb68da386"
                class="h-16  grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 1"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-RBK1-N0R336.webp?alt=media&token=f3f3f17b-0d05-4eb2-a844-3ba7c739defa"
                class="h-16 grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 2"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-Q8AO-GNS2TT.webp?alt=media&token=fa94f419-d4e2-4994-b900-71765f4f276e"
                class="h-16 grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 3"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-OZ9R-ZKOQ9U.webp?alt=media&token=fdd84fdc-f1c8-4194-a75c-1d27e3f13c14"
                class="h-16grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 4"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-BC87-U3I8X5.webp?alt=media&token=d942acc4-803d-4815-8c54-6d066ebd7aed"
                class="h-16 grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 5"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-5DLF-GCX18Y.webp?alt=media&token=dfac0dc6-ddfb-4e95-8a17-0a5ba2ca6b75"
                class="h-16 grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 6"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sparepap-b0733.appspot.com/o/cms%2Fheros%2FKE-FIU4-W983TG.webp?alt=media&token=5bf0d3b6-04c0-49fa-a7ab-9ded662b1a3d"
                class="h-16 grayscale max-w-none h-[2rem] md:h-[5rem] w-[3rem] md:w-[7rem]"
                alt="Brand 7"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script setup>
import Header from "../components/Home/header.vue";

definePageMeta({
  layout: false,
});

</script>
<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);
  }
}
/* .marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.marquee {
  display: flex;
  animation: marquee 15s linear infinite;
} */

.marquee {
  display: flex;
  animation: marquee 15s linear infinite;
}
.grayscale {
  filter: grayscale(100%);
}
</style>
