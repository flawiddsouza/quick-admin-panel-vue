<template>
    <div style="padding: 1em">
        Hi, this is a page to test the notify plugin.

        <button @click="showNotification('success')">Show Success Notification</button>
        <button @click="showNotification('error')" style="margin-left: 1em">Show Error Notification</button>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const $notify = inject('$notify')

function showNotification(type) {
    if(type === 'success') {
        $notify.success('This is a success notification')
    }

    if(type === 'error') {
        $notify.error('This is an error notification')
    }
}

// Options API:
// export default {
//     methods: {
//         showNotification(type) {
//             if(type === 'success') {
//                 this.$notify.sucess('This is a success notification')
//             }

//             if(type === 'error') {
//                 this.$notify.sucess('This is a error notification')
//             }
//         }
//     }
// }
</script>
