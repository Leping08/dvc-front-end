<template>
  <div class="bg-white dark:bg-black shadow fixed w-full z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <div class="flex items-center">
              <svg
                class="h-10"
                viewBox="0 0 280 245"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M192.058 179.423L229.891 245H269.904C277.602 245 282.413 236.667 278.564 230L220.633 129.66L192.058 179.423Z"
                  class="text-lightBlue-700"
                  fill="currentColor"
                />
                <path
                  d="M209.07 109.633L180.5 159.388L111.377 39.5761L131.34 5.00002C135.189 -1.66665 144.811 -1.66667 148.66 5L209.07 109.633Z"
                  class="text-lightBlue-700"
                  fill="currentColor"
                />
                <path
                  d="M154.402 245H206.801L180.54 199.481L154.402 245Z"
                  class="text-lightBlue-500"
                  fill="currentColor"
                />
                <path
                  d="M168.982 179.446L140 229.918L70.93 109.633L99.8281 59.5798L168.982 179.446Z"
                  class="text-lightBlue-500"
                  fill="currentColor"
                />
                <path
                  d="M59.3672 129.66L1.43596 230C-2.41304 236.667 2.39823 245 10.0962 245H125.598L59.3672 129.66Z"
                  class="text-lightBlue-300"
                  fill="currentColor"
                />
              </svg>
              <div class="font-sans text-gray-700 dark:text-blueGray-300 text-2xl font-medium pl-2">
                DeltaV Creative
              </div>
            </div>
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-blueGray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a href="#" v-for="item in navItems" :key="item" class="text-base font-medium text-blueGray-600  hover:text-blueGray-800 dark:text-blueGray-400 dark:hover:text-blueGray-200">
            {{ item }}
          </a>
        </nav>
        <div class="flex items-center justify-center flex-1">
          <slot></slot>
        </div>
        <!-- <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#">
            <v-button :outline="true" color="lightBlue">
              Contact Us
            </v-button>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      darkMode: false,
      navItems: [
        'Design',
        'Development',
        'Hosting',
        'SEO',
        'Marketing',
        'Consulting'
      ]
    }
  }
}
</script>
