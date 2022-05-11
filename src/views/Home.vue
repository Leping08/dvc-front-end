<template>
  <div class="bg-blueGray-50">
    <!-- Digital Marketing Made Easy -->
    <div class=" bg-blueGray-50 dark:bg-blueGray-900">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex-none sm:flex items-center justify-around">
          <div class="w-full">
            <img class="h-48 mx-auto my-4" src="@/assets/icons/rocket.svg">
          </div>
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Digital Marketing Made Easy
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              Business owners don't have time to keep up with the ever changing digital marketing landscape. Thats where out team comes in to guide you through the complexities of digital marketing to find the correct customers for your business.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Design -->
    <div class=" bg-white dark:bg-blueGray-800">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex-none sm:flex flex-row-reverse items-center justify-around">
          <div class="w-full">
            <img class="h-48 mx-auto my-4" src="@/assets/icons/design.svg">
          </div>
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Design
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              We work along side your team to implement processes, design software and automate reports or anything else that will help solve real world business challenges.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Development -->
    <div class=" bg-blueGray-50 dark:bg-blueGray-900">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex-none sm:flex items-center justify-around">
          <div class="w-full">
            <img class="h-48 mx-auto my-4" src="@/assets/icons/dev.svg">
          </div>
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Development
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              Design and develop modern cloud-based websites, apps, or platforms  to solve real world business challenges.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hosting -->
    <div class=" bg-white dark:bg-blueGray-800">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex items-center justify-around">
          <div class="w-1/2">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Hosting
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              The latest cloud-based infrastructure for lightning fast speed and great scalability.
            </div>
          </div>
          <div class="w-1/2">
            <div class="">
              <img class="w-1/2 mx-auto" src="@/assets/icons/host.svg">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SEO -->
    <div class=" bg-blueGray-50 dark:bg-blueGray-900">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex items-center justify-around flex-row-reverse">
          <div class="max-w-7xl mx-auto">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Search Engine Optimization
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              SEO strategies for website and applications to organically reach the customers for your business or product.
            </div>
          </div>
          <div class="w-1/2 flex justify-around">
            <img class="h-48" src="@/assets/icons/seo.svg">
          </div>
        </div>
      </div>
    </div>

    <!-- Marketing -->
    <div class=" bg-white dark:bg-blueGray-800">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex items-center justify-around">
          <div class="w-1/2">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Marketing
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              With regular marketing meetings we look over data and go over strategies to find the right customer at the right time.
            </div>
          </div>
          <div class="w-1/2">
            <div class="">
              <img class="w-1/2 mx-auto" src="@/assets/icons/marketing.svg">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Consulting -->
    <div class=" bg-blueGray-50 dark:bg-blueGray-900">
      <div class="max-w-7xl mx-auto py-8">
        <div class="flex items-center justify-around flex-row-reverse">
          <div class="max-w-7xl mx-auto">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300">
              Consulting
            </div>
            <div class="text-lg text-blueGray-600 dark:text-blueGray-400 pt-1">
              An extension to your business helping you navigate the complexities of websites and digital marketing.
            </div>
          </div>
          <div class="w-1/2 flex justify-around">
            <img class="h-48" src="@/assets/icons/consulting.svg">
          </div>
        </div>
      </div>
    </div>

    <!-- Lets Talk -->
    <div class="bg-white dark:bg-blueGray-800">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex items-center justify-around">
          <div class="w-1/2">
            <img class="w-7/12 z-20" src="@/assets/imgs/derk.png" alt="">
          </div>
          <div class="w-1/2 mx-auto">
            <div class="text-4xl text-blueGray-700 dark:text-blueGray-300 pl-6 pb-4">
              Lets Talk
            </div>
            <div class="text-2xl text-blueGray-600 dark:text-blueGray-400 pt-1 z-10">
              <div class="bg-blueGray-50 rounded-lg p-4 shadow-lg w-full">
                <v-input
                  v-model="name"
                  label="Name"
                  placeholder="John Doe"
                  :rules="['min:2','max:255']"
                  type="text"
                  class="p-2"
                />

                <v-input
                  v-model="firstName"
                  label="First Name"
                  placeholder="John"
                  type="text"
                  class="p-2 hidden"
                />

                <v-input
                  v-model="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  type="text"
                  class="p-2 hidden"
                />

                <v-input
                  v-model="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  :rules="['min:2','max:255', 'email']"
                  type="text"
                  class="p-2"
                />

                <v-input
                  v-model="phone"
                  label="Phone"
                  placeholder="999-999-9999"
                  :rules="['min:2','max:255']"
                  type="text"
                  class="p-2"
                />

                <v-input
                  v-model="message"
                  label="Message"
                  placeholder=""
                  type="textarea"
                  :rules="['min:2','max:25555']"
                  class="p-2"
                />

                <div class="flex items-center">
                  <v-button
                    v-if="state === null || state === 'error'"
                    class="m-2"
                    :outline="true"
                    @click="submit()"
                  >
                    Submit
                  </v-button>
                  <v-progress-spinner
                    v-if="state === 'loading'"
                    class="m-2"
                    :size="8"
                  />
                  <v-badge
                    v-if="state === 'success'"
                    class="m-2"
                    color="green"
                  >
                    We'll be in touch!
                  </v-badge>
                  <v-badge
                    v-if="state === 'error'"
                    class="m-2"
                    color="red"
                  >
                    Error
                  </v-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 dark:text-lightBlue-500 text-lightBlue-500 opacity-50 -mt-20" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,234.7C672,256,768,256,864,234.7C960,213,1056,171,1152,170.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 dark:text-lightBlue-500 text-lightBlue-500 opacity-50 -mt-20" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,261.3C384,256,480,224,576,176C672,128,768,64,864,74.7C960,85,1056,171,1152,202.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      pageLoadedTime: new Date(),
      state: null
    }
  },
  methods: {
    async submit () {
      // Check if the form is in the process of sending the last request
      if (this.state === 'loading') {
        return
      }

      // Check if it has been at least 2 seconds from the page loading to the form being submitted
      const secondsOnPageBeforeSubmit = Math.abs((new Date() - this.pageLoadedTime) / 1000)
      if (secondsOnPageBeforeSubmit < 2) {
        this.state = 'error'
        return
      }

      // TODO check the fields are valid, name, email, phone, message
      if (!(this.email && this.name && this.phone && this.message)) {
        this.state = 'error'
        return
      }

      // Check if honey pot has been filled out and don't submit the form
      if (this.firstName || this.lastName) {
        this.state = 'error'
        return
      }

      // Build the request
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
      }

      // Reset the error and loading states
      this.state = 'loading'

      // Submit the request
      const response = await fetch(process.env.VUE_APP_DVC_API_URL + '/api/lead', request)

      // Check if the response is not ok
      if (!response.ok) {
        this.state = 'error'
        console.log(response)
        return
      }

      // Get the json data from the response
      // await response.json()
      this.state = 'success'
    }
  }
}
</script>
