<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    />
</template>

<script>
export default {
    mounted() {
        const originAutocomplete = new google.maps.places.Autocomplete(this.$refs["input"], {
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(106.8046306 ,-6.2143089)
            ),
            fields: ['place_id', 'name', 'types'],
            types: ["point_of_interest"]
        })

        originAutocomplete.addListener("place_changed", () => {
            console.log(originAutocomplete.getPlace())
        })
    }

}
</script>
