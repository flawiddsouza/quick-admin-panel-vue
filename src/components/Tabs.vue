<template>
    <div class="tabs">
        <div @click.prevent="$emit('update:selectedItem', item[value])" :class="{ active: selectedItem === item[value] }" v-for="item in items">{{ item[label] }}</div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        label: String,
        value: String,
        selectedItem: String | Object
    }
}
</script>


<style scoped>
.tabs {
    display: inline-flex;
    border: 1px solid var(--primary-color, brown);
}

.tabs > div {
    padding: 0.5em;
    cursor: pointer;
    border-right: 1px solid var(--primary-color, brown);
}

.tabs > div:last-child {
    border-right: 0;
}

.tabs > div.active {
    background-color: var(--primary-color, brown);
    color: white;
}
</style>
