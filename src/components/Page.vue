<template>
    <div style="height: calc(100vh - 5.5rem)">
        <div class="page">
            <div class="heading-underline">
                <h2>
                    {{ title }}
                    <span v-if="title === ''" style="visibility: hidden;">Title</span>
                </h2>
                <div>
                    <slot name="title-right-content"></slot>
                </div>
            </div>
            <div class="page-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
div.page {
    margin: 1rem;
    padding: 1rem;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 6px #bbc2ca;
    padding: 10px 20px 30px;
    display: grid;
    grid-auto-rows: auto 1fr;
}

div.heading-underline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 8px;
    margin-bottom: 10px;
}

div.heading-underline > h2 {
    margin: 0
}

div.page-content {
    overflow: auto;
}
</style>
