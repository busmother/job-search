<template>
    <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
    />
</template>

<script>
export default {
    name: "TextInput",
    props: {
        placeholder: {
            type: String,
            required: false, // if you set required to false
            default: "", // you need a default, but we can do ""
        }
    },
    data() {
        return {
            value: "",
        }
    },
    methods: {
        handleInput($event) {
            this.value = $event.target.value
        }
    }
}
</script>
