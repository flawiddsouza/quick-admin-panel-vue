<template>
    <Container :sidebar-items="sidebarItems">
        <div style="padding: 1em">{{ selectedItem }}</div>
        <template #sidebar-item="{ sidebarItem, selectSidebarItem, isActive }">
            <a @click="handleClick(sidebarItem, selectSidebarItem)" :class="{ 'active': isActive }">{{ sidebarItem.name }}</a>
        </template>
    </Container>
</template>

<script setup>
import Container from '@/components/Container.vue'
import { ref } from 'vue'

const sidebarItems = []

for(let i=1; i<=100; i++) {
    sidebarItems.push({
        name: 'Sidebar Item ' + i,
        link: '#box' + i
    })
}

const selectedItem = ref(null)

function handleClick(sidebarItem, selectSidebarItem) {
    selectedItem.value = sidebarItem
    selectSidebarItem()
}
</script>
