<template>
    <div style="padding: 1em">
        Hi, this is a page to test the loading plugin.

        <button @click="startLoader">Start Loader</button>

        Loader will hide in 3 seconds
    </div>
</template>

<script setup>
import { inject } from 'vue'
const $loading = inject('$loading')

function startLoader() {
    let loader = $loading.show()
    setTimeout(() => {
        loader.hide()
    }, 3000)
}

// Options API:
// export default {
//     methods: {
//         startLoader() {
//             let loader = this.$loading.show()
//             setTimeout(() => {
//                 loader.hide()
//             }, 3000)
//         }
//     }
// }
</script>
