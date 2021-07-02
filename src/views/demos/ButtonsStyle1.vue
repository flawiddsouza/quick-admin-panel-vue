<template>
    <div style="margin: 1em">
        Anchor Tags:
        <div style="padding: 1rem">
            <a class="button">
                <i class="fa fa-plus" style="margin-right: 0.3rem"></i> Add Item
            </a>
            <a class="button button-red" style="margin-left: 1rem">
                <i class="fa fa-trash" style="margin-right: 0.3rem"></i> Delete
            </a>
            <a class="button button-green" style="margin-left: 1rem">
                <i class="fa fa-check" style="margin-right: 0.3rem"></i> Accept
            </a>
        </div>

        <br>

        Button Tags:
        <div style="padding: 1rem">
            <button class="button">
                <i class="fa fa-plus" style="margin-right: 0.3rem"></i> Add Item
            </button>
            <button class="button button-red" style="margin-left: 1rem">
                <i class="fa fa-trash" style="margin-right: 0.3rem"></i> Delete
            </button>
            <button class="button button-green" style="margin-left: 1rem">
                <i class="fa fa-check" style="margin-right: 0.3rem"></i> Accept
            </button>
        </div>

        Button Tags (with Solid Icons):
        <div style="padding: 1rem">
            <button class="button">
                <i class="fas fa-plus"></i> Add Item
            </button>
            <button class="button button-red" style="margin-left: 1rem">
                <i class="fas fa-trash"></i> Delete
            </button>
            <button class="button button-green" style="margin-left: 1rem">
                <i class="fas fa-check"></i> Accept
            </button>
        </div>
    </div>
</template>

<script>
import '@/sass/buttons-style-1.scss'
</script>
