<template>
    <div style="padding: 2em">
        <div style="margin-bottom: 0.5em">Use same property as name and value</div>
        <Tabs :items="items" label="name" value="name" v-model:selectedItem="mySelectedItem"></Tabs>
        <div style="margin-top: 1em">This is my selected item's value: {{ mySelectedItem }}</div>
        <br>
        <br>
        <div style="margin-bottom: 0.5em">Use different properties for name and value</div>
        <Tabs :items="items" label="name" value="value" v-model:selectedItem="mySelectedItem2"></Tabs>
        <div style="margin-top: 1em">This is my selected item's value: {{ mySelectedItem2 }}</div>
    </div>
</template>

<script setup>
import Tabs from '@/components/Tabs.vue'
import { ref } from 'vue'

const items = [
    {
        name: 'Tab 1',
        value: 'Tab Value 1',
    },
    {
        name: 'Tab 2',
        value: 'Tab Value 2'
    },
    {
        name: 'Tab 3',
        value: 'Tab Value 3'
    },
    {
        name: 'Tab 4',
        value: 'Tab Value 4'
    },
    {
        name: 'Tab 5',
        value: 'Tab Value 5'
    }
]

const mySelectedItem = ref('Tab 1')
const mySelectedItem2 = ref('Tab Value 1')
</script>
