<template>
    <div style="display: flex; flex-direction: column; height: 100vh">
        <nav style="display: flex; align-items: center;">
            <slot name="navbar">
                <div style="height: 100%; width: 200px; font-size: 1.5rem; display: flex; justify-content: center; align-items: center;">
                    Software Logo
                </div>
            </slot>
        </nav>
        <div style="display: flex; flex: 1;">
            <aside>
                <div style="position: sticky; top: 0; padding: 0.7rem 0.5rem; background-color: var(--sidebar-background-color, brown);">
                    <input type="search" placeholder="Search..." class="sidebar-filter" v-model="filter">
                </div>
                <template v-for="sidebarItem in filteredSidebarItems">
                    <div class="sidebar-item">
                        <slot name="sidebar-item" :sidebar-item="sidebarItem" :select-sidebar-item="() => selectedSidebarItem = sidebarItem" :is-active="selectedSidebarItem && selectedSidebarItem.name === sidebarItem.name"></slot>
                    </div>
                </template>
            </aside>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
    sidebarItems: Array
})

const filter = ref('')

const filteredSidebarItems = computed(() => {
    if(filter.value) {
        return props.sidebarItems.filter(item => item.name.toLowerCase().includes(filter.value.toLowerCase()))
    } else {
        return props.sidebarItems
    }
})

const selectedSidebarItem = ref(null)
</script>

<style scoped>
aside {
    width: var(--sidebar-width, 200px);
    background-color: var(--sidebar-background-color, brown);
    height: calc(100vh - var(--navbar-height, 55px));
    overflow-y: auto;
    padding-bottom: 2em;
}

.sidebar-filter {
    border-radius: var(--default-border-radius, 0.2rem);
    border: 1px solid #a7a2a2;
    padding: 0.2rem;
    width: 100%;
    outline: 0;
}

.sidebar-item ::v-deep(a) {
    display: block;
    color: var(--sidebar-item-text-color, white);
    text-decoration: none;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.7rem;
    transition: background-color 0.5s ease;
    cursor: pointer;
}

.sidebar-item:hover {
    background-color: var(--sidebar-item-hover-background-color, #981010);
}

.sidebar-item ::v-deep(a.active) {
    background-color: var(--sidebar-item-active-background-color, #800);
}

.content {
    flex: 1;
    overflow: auto;
    background-color: var(--content-background-color, aliceblue);
}

nav {
    box-shadow: 0 0 6px #bbc2ca;
    background-color: white;
    width: 100%;
    padding: 5px 0;
    z-index: 2;
    height: var(--navbar-height, 55px);
}
</style>
