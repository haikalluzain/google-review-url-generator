<script setup>
import InputLabel from "@/Components/InputLabel.vue";
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";
import { onMounted } from "vue";

defineProps({
  canResetPassword: {
    type: Boolean,
  },
  status: {
    type: String,
  },
});

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <Head title="Google Review URL Generator" />
  <div
    class="flex flex-col items-center min-h-screen pt-6 bg-hd-base-original sm:justify-center sm:pt-0"
  >
    <div class="w-40 mb-4 text-gray-500 fill-current">
      <img src="/img/logo_color_bgtransparent_h_cropped_print.png" />
    </div>
    <div class="max-w-screen-xl px-4 py-4 mx-auto">
      <div class="max-w-screen-sm mx-auto mb-4 text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Google Review URL Generator
        </h2>
        <p class="font-light text-gray-500 sm:text-xl">
          The ultimate tool to simplifies the process of generating Google
          Review links for your business.
        </p>
      </div>
    </div>

    <div
      class="w-full px-6 py-4 mt-6 mb-6 overflow-hidden bg-white shadow sm:max-w-2xl sm:rounded-lg ring-1 ring-gray-200"
    >
      <form @submit.prevent="submit">
        <div>
          <InputLabel for="email" value="Search Location" />
          <input
            class="relative block w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border-0 rounded-md shadow-sm form-input disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none dark:placeholder-gray-500 dark:bg-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-hd-secondary-500 dark:focus:ring-secondary-400"
            ref="input"
            @input="(ev) => (location.address = ev.target.value)"
          />
          <div
            id="dropdown"
            class="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow z-100"
          >
            <ul
              class="py-2 text-sm text-gray-700"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Dashboard</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Settings</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Earnings</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>

    <div
      v-show="hasLocation"
      class="w-full max-w-3xl p-4 bg-white rounded-lg shadow ring-1 ring-gray-200 sm:p-8"
    >
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-semibold text-gray-900">
          {{ location.name }}
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span
                  type="button"
                  class="text-white bg-hd-secondary-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-book"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-lg font-medium text-gray-900 truncate">
                  View Google Reviews
                </p>
                <a
                  :href="location.reviewListLink"
                  target="_blank"
                  class="text-sm no-underline break-all text-hd-secondary-500 hover:underline"
                  >{{ location.reviewListLink }}</a
                >
              </div>
              <div
                class="inline-flex items-center pl-2 text-base font-semibold text-gray-900"
              >
                <button
                  type="button"
                  @click="copy(location.reviewListLink)"
                  class="p-2 text-sm font-medium text-gray-400 bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 hover:border-hd-secondary-400 hover:text-hd-secondary-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clipboard"
                  >
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    ></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span
                  type="button"
                  class="text-white bg-hd-secondary-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-star"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                </span>
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-lg font-medium text-gray-900 truncate">
                  Write a Review
                </p>
                <a
                  :href="location.addReviewLink"
                  target="_blank"
                  class="text-sm no-underline break-all text-hd-secondary-500 hover:underline"
                  >{{ location.addReviewLink }}</a
                >
              </div>
              <div
                class="inline-flex items-center pl-2 text-base font-semibold text-gray-900"
              >
                <button
                  type="button"
                  @click="copy(location.addReviewLink)"
                  class="p-2 text-sm font-medium text-gray-400 bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 hover:border-hd-secondary-400 hover:text-hd-secondary-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clipboard"
                  >
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    ></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li class="pt-3 sm:pt-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span
                  type="button"
                  class="text-white bg-hd-secondary-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-map-pin"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-lg font-medium text-gray-900 truncate">
                  See on Maps
                </p>
                <a
                  :href="location.mapsLink"
                  target="_blank"
                  class="text-sm no-underline break-all text-hd-secondary-500 hover:underline"
                  >{{ location.mapsLink }}</a
                >
              </div>
              <div
                class="inline-flex items-center pl-2 text-base font-semibold text-gray-900"
              >
                <button
                  type="button"
                  @click="copy(location.mapsLink)"
                  class="p-2 text-sm font-medium text-gray-400 bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 hover:border-hd-secondary-400 hover:text-hd-secondary-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clipboard"
                  >
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    ></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-show="copied"
      class="p-4 my-4 text-sm rounded-lg text-hd-secondary-800 bg-hd-secondary-100"
      role="alert"
    >
      <span class="font-medium">Link copied!</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const originAutocomplete = new google.maps.places.Autocomplete(
      this.$refs["input"],
      {
        fields: ["place_id", "name", "url", "formatted_address"],
        // types: ["point_of_interest"],
      }
    );

    originAutocomplete.addListener("place_changed", () => {
      this.locationChanged(originAutocomplete.getPlace());
    });
  },
  data() {
    return {
      copied: false,
      hasLocation: false,
      location: {
        name: "",
        placeId: "",
        addReviewLink: "",
        reviewListLink: "",
        searchLink: "",
        address: "",
      },
    };
  },
  methods: {
    locationChanged(val) {
      this.hasLocation = true;
      this.location.name = `${val.name}, ${val.formatted_address}`;
      this.location.placeId = val.placeId;
      this.location.addReviewLink = `https://search.google.com/local/writereview?placeid=${val.place_id}`;
      this.location.reviewListLink = `https://search.google.com/local/reviews?placeid=${val.place_id}`;
      this.location.mapsLink = val.url;
    },
    async copy(s) {
      await navigator.clipboard.writeText(s);
      this.copied = true;
    },
  },
};
</script>
