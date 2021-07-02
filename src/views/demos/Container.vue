<template>
    <Container :sidebar-items="sidebarItems">
        <Page :title="selectedItem.name" v-if="selectedItem">
            <template #title-right-content>
                {{ selectedItem.link}}
            </template>
            {{ selectedItem }}
        </Page>
        <template #sidebar-item="{ sidebarItem, selectSidebarItem, isActive }">
            <a @click="handleClick(sidebarItem, selectSidebarItem)" :class="{ 'active': isActive }">{{ sidebarItem.name }}</a>
        </template>
    </Container>
</template>

<script setup>
import Container from '@/components/Container.vue'
import Page from '@/components/Page.vue'
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
