<template>
    <div class="modal" tabindex="0" @click="closeModalOnBackgroundClick">
        <div class="modal__container">
            <div class="modal__content">
                <header>
                    <h3>{{ title }}</h3>
                    <span @click="$emit('update:modelValue', false)">close</span>
                </header>
                <div class="modal-main">
                    <slot>No Modal Content</slot>
                </div>
                <footer v-if="$slots.footer">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: Boolean,
        title: String
    },
    methods: {
        closeModalOnBackgroundClick(e) {
            if(e.target.closest('.modal__content') === null) {
                this.$emit('update:modelValue', false)
            }
        }
    }
}
</script>

<style scoped>
.modal {
    --gutter: 14px;
    --modal-color: var(--primary-color, brown);
    --soft-color: #fafafa;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__container {
    width: 95vw;
    max-width: 600px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    margin: 0 auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
}

.modal__container header {
    min-height: 60px;
    height: 60px;
    color: #ffffff;
    background-color: var(--modal-color);
    display: grid;
    padding-left: var(--gutter);
    align-items: center;
    grid-template-columns: auto 60px;
}

.modal__container header h4 {
    margin: 0;
    text-align: left;
}

.modal__container header span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 20px;
    opacity: 0.8;
    cursor: pointer;
}

.modal__container header span:hover {
    opacity: 1;
}

.modal__container .modal-main {
    flex: 1;
    text-align: left;
    overflow: auto;
    padding: 1rem 1.5rem;
    min-height: 15em;
    max-height: 62vh;
}

.modal__container footer {
    height: auto;
    text-align: right;
    border-top: solid 1px #cccccc;
    padding: var(--gutter);
    background-color: #ffffff;
    background-color: var(--soft-color);
}

.modal__container footer button, .modal__container footer input {
    margin: 0;
}

.modal__container footer button:not(:last-child), .modal__container footer input:not(:last-child) {
    margin-right: var(--gutter);
}

.modal__content {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
