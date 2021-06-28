<template>
    <Container :items="items">
        <div style="padding: 1em">{{ selectedItem }}</div>
        <template #sidebar-item="{ item, selectItem, isActive }">
            <a @click="handleClick(item, selectItem)" :class="{ 'active': isActive }">{{ item.name }}</a>
        </template>
    </Container>
</template>

<script setup>
import Container from '@/components/Container.vue'
import { ref } from 'vue'

const items = []

for(let i=1; i<=100; i++) {
    items.push({
        name: 'Sidebar Item ' + i,
        link: '#box' + i
    })
}

const selectedItem = ref(null)

function handleClick(item, selectItem) {
    selectedItem.value = item
    selectItem()
}
</script>
