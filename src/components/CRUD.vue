<template>
    <div style="height: 100%">
        <DataTable :url="url" :fields="fields.filter(field => !field.formOnly)" item-actions-width="12em" button-class="button" :bus="bus">
            <template #actions>
                <a class="button" @click="showAddModal = true">
                    <i class="fas fa-plus"></i>
                    Add Item
                </a>
            </template>
            <template #item-actions="{ item }">
                <slot name="item-actions" :item="item"></slot>
                <a class="button" @click="editItem(item)">
                    <i class="fas fa-edit"></i>
                    Edit
                </a>
                <a class="button button-red ml-1rem" @click="deleteItem(item.id)">
                    <i class="fas fa-trash"></i>
                    Delete
                </a>
            </template>
        </DataTable>
        <form @submit.prevent="addItem">
            <Modal v-model="showAddModal" :title="`Add ${itemDescription}`" v-if="showAddModal" ref="modal">
                <slot name="add-modal" :form-data="formData">
                    <div v-for="(field, index) in fields.filter(field => !field.viewOnly)">
                        <label :class="{ 'mt-0_5rem': index > 0 }" class="d-b">
                            <div class="mb-0_3rem">{{ field.label }}</div>
                            <input type="text" v-model="formData[field.field]" v-if="field.inputType === 'text'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="email" v-model="formData[field.field]" v-if="field.inputType === 'email'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="password" v-model="formData[field.field]" v-if="field.inputType === 'password'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="number" v-model="formData[field.field]" v-if="field.inputType === 'number'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="date" v-model="formData[field.field]" v-if="field.inputType === 'date'" :required="field.required" class="w-100p">
                            <select v-model="formData[field.field]" v-if="field.inputType === 'select'" :required="field.required" class="w-100p">
                                <option v-for="option in selectData[field.field]" :value="option.value">{{ option.label }}</option>
                            </select>
                            <CheckboxMultiselect :items="selectData[field.field]" value="value" text="label" v-model:selected-items="formData[field.field]" style="width: 100%" v-if="field.inputType === 'multiselect'" />
                        </label>
                    </div>
                </slot>
                <template #footer>
                    <button class="button">Save</button>
                </template>
            </Modal>
        </form>
        <form @submit.prevent="updateItem">
            <Modal v-model="showEditModal" :title="`Edit ${itemDescription}`" v-if="showEditModal" ref="modal">
                <slot name="edit-modal" :edit-form-data="editFormData" :show-edit-modal="showEditModal">
                    <div v-for="(field, index) in fields.filter(field => !field.viewOnly)">
                        <label :class="{ 'mt-0_5rem': index > 0 }" class="d-b" v-if="!field.addOnly">
                            <div class="mb-0_3rem">{{ field.label }}</div>
                            <input type="text" v-model="editFormData[field.field]" v-if="field.inputType === 'text'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="email" v-model="editFormData[field.field]" v-if="field.inputType === 'email'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="password" v-model="editFormData[field.field]" v-if="field.inputType === 'password'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="number" v-model="editFormData[field.field]" v-if="field.inputType === 'number'" :required="field.required" @keydown="checkMaxLength($event, field.maxLength)" class="w-100p">
                            <input type="date" v-model="editFormData[field.field]" v-if="field.inputType === 'date'" :required="field.required" class="w-100p">
                            <select v-model="editFormData[field.field]" v-if="field.inputType === 'select'" :required="field.required" class="w-100p">
                                <option v-for="option in selectData[field.field]" :value="option.value">{{ option.label }}</option>
                            </select>
                            <CheckboxMultiselect :items="selectData[field.field]" value="value" text="label" v-model:selected-items="editFormData[field.field]" style="width: 100%" v-if="field.inputType === 'multiselect'" />
                        </label>
                    </div>
                </slot>
                <template #footer>
                    <button class="button">Save</button>
                </template>
            </Modal>
        </form>
    </div>
</template>

<script>
import DataTable from './DataTable.vue'
import CheckboxMultiselect from './CheckboxMultiselect.vue'

export default {
    props: {
        url: String,
        fields: Array,
        itemDescription: String,
        addItemOverride: {
            type: Function,
            required: false
        },
        editItemOverride: {
            type: Function,
            required: false
        },
        updateItemOverride: {
            type: Function,
            required: false
        }
    },
    components: {
        DataTable,
        CheckboxMultiselect
    },
    data() {
        return {
            showAddModal: false,
            showEditModal: false,
            formData: {},
            editFormData: {},
            selectData: {}
        }
    },
    computed: {
        bus() {
            return window.bus
        }
    },
    watch: {
        showAddModal() {
            if(this.showAddModal) {
                this.$nextTick(() => {
                    this.$el.querySelector('form input, form select')?.focus()
                })

                this.fields.filter(field => !field.viewOnly).forEach(async field => {
                    if(typeof field.selectData !== 'function') {
                        this.selectData[field.field] = field.selectData
                    } else {
                        this.selectData[field.field] = await field.selectData(this.formData)
                    }
                })
            }
        },
        showEditModal() {
            if(this.showEditModal) {
                this.$nextTick(() => {
                    this.$el.querySelector('form input, form select')?.focus()
                })

                this.fields.filter(field => !field.viewOnly).forEach(async field => {
                    if(typeof field.selectData !== 'function') {
                        this.selectData[field.field] = field.selectData
                    } else {
                        this.selectData[field.field] = await field.selectData(this.editFormData)
                    }
                })
            }
        }
    },
    methods: {
        checkMaxLength(e, maxLength) {
            if(e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Enter') {
                return
            }
            if(String(e.target.value).length >= maxLength) {
                e.preventDefault()
            }
        },
        async addItem() {
            let loader = this.$loading.show()

            let response = null

            if(this.addItemOverride) {
                response = await this.addItemOverride(this.url, this.formData)
            } else {
                response = await fetchy.post(this.url, this.formData)
            }

            if(response.status === 400) {
                loader.hide()
                this.$notify.error(response.data)
                return
            }
            this.formData = {}
            this.$notify.success(`${this.itemDescription} Added`)
            this.showAddModal = false
            this.bus.emit('refreshDataTable')
            loader.hide()
        },
        async editItem(item) {
            if(this.editItemOverride) {
                await this.editItemOverride(item, this)
            } else {
                this.editFormData = JSON.parse(JSON.stringify(item))
            }
            this.showEditModal = true
        },
        async updateItem() {
            let loader = this.$loading.show()

            let response = null

            if(this.updateItemOverride) {
                response = await this.updateItemOverride(`${this.url}/${this.editFormData.id}`, this.editFormData)
            } else {
                response = await fetchy.put(`${this.url}/${this.editFormData.id}`, this.editFormData)
            }

            if(response.status === 400) {
                loader.hide()
                this.$notify.error(response.data)
                return
            }
            this.editFormData = {}
            this.$notify.success(`${this.itemDescription} Updated`)
            this.showEditModal = false
            this.bus.emit('refreshDataTable')
            loader.hide()
        },
        async deleteItem(id) {
            if(!confirm('Are you sure you want to delete this item?')) {
                return
            }
            let loader = this.$loading.show()
            const response = await fetchy.delete(`${this.url}/${id}`)
            if(response.status === 400) {
                loader.hide()
                this.$notify.error(response.data)
                return
            }
            this.$notify.success(`${this.itemDescription} Deleted`)
            this.showAddModal = false
            this.bus.emit('refreshDataTable')
            loader.hide()
        }
    }
}
</script>

<style scoped>
.w-100p {
    width: 100%;
}

.d-b {
    display: block;
}

.mt-0_5rem {
    margin-top: 0.5rem;
}

.mb-0_3rem {
    margin-bottom: 0.3rem;
}
</style>
