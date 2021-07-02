<template>
    <div style="--primary-color: #7c71ba; padding: 2rem">
        <button @click="showModal = true">Show Modal</button>
        <form @submit.prevent>
            <Modal v-model="showModal" title="Add Category" v-if="showModal" ref="modal">
                <div>
                    <label>
                        <div style="margin-bottom: 0.3rem">Category</div>
                        <input type="text" maxlength="255" required style="width: 100%; padding: 0.3em">
                    </label>
                </div>
                <div style="margin-top: 0.5rem">
                    <label>
                        <div style="margin-bottom: 0.3rem">Category</div>
                        <input type="text" maxlength="255" required style="width: 100%; padding: 0.3em">
                    </label>
                </div>
                <template #footer>
                    <button class="button">Save</button>
                </template>
            </Modal>
        </form>
    </div>
</template>

<script setup>
import Modal from '@/components/Modal.vue'
import { ref, watch, nextTick } from 'vue'

const showModal = ref(false)

watch(showModal, () => {
    if(showModal) {
        nextTick(() => {
            document.querySelector('form input, form select')?.focus()
        })
    }
})
</script>
