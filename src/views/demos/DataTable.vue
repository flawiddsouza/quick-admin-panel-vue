<template>
    <div style="padding: 2em">
        <DataTable url="/demo" :fields="fields" :demo="true"></DataTable>
    </div>
</template>

<script setup>
import DataTable from '@/components/DataTable.vue'
import { reactive } from 'vue'

const fields = reactive([
    {
        field: 'field_name_1',
        label: 'Field Name 1'
    },
    {
        field: 'field_name_2',
        label: 'Field Name 2'
    },
    {
        field: 'field_name_3',
        label: 'Field Name 3'
    }
])
</script>
