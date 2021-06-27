<template>
    <Container :items="items">
        <div style="padding: 1em">Content</div>
    </Container>
</template>

<script setup>
import Container from '@/components/Container.vue'

const items = []

for(let i=1; i<=100; i++) {
    items.push({
        name: 'Sidebar Item ' + i,
        link: '#box' + i
    })
}
</script>
