<template>
    <div class="pos-r">
        <div @click="expand = !expand" v-if="collapsible" :style="collapsibleStyle" class="checkbox-multiselect-selector">{{ this.selectedItems.length }} items selected</div>
        <div :style="rootStyle" v-if="expand" v-click-outside="clickOutside">
            <div class="pos-a bc-white" style="padding-bottom: 0.2em" v-if="items && items.length > 0">
                <div><input type="search" v-model="filter" placeholder="Filter..." class="va-s" :style="{ width: filterWidth ? filterWidth : null }"></div>
                <div v-if="filteredItems && filteredItems.length > 0" style="padding-top: 0.5rem" class="bb-grey"><label :style="labelStyle"><input type="checkbox" value="true" v-model="selectAll" @change="selectAllChanged"> Select All</label></div>
            </div>
            <div v-if="items && items.length > 0 && filteredItems && filteredItems.length === 0" style="margin-top: 2.2rem; font-size: 0.9rem">
                No Records Found
            </div>
            <div v-if="items && items.length === 0" style="font-size: 0.9em">
                No Records Found
            </div>
            <div class="o-a" :style="{ height: innerContainerHeight ? innerContainerHeight : '7em', marginTop: '4em' }" v-if="items && items.length > 0 && filteredItems && filteredItems.length > 0">
                <div v-for="item in filteredItems">
                    <label :style="labelStyle"><input type="checkbox" :value="item[value]" @change="handleChange" v-model="selectedItemsVirtual"> {{ item[text] }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'items': Array,
        'text': [String, Number],
        'value': [String, Number],
        'selectedItems': Array,
        'collapsible': Boolean,
        'containerHeight': String,
        'innerContainerHeight': String,
        'filterWidth': String,
        'resetSelectedItemsOnItemsChange': {
            type: Boolean,
            default: true
        }
    },
    computed: {
        filteredItems() {
            if(this.filter) {
                return this.items.filter(item => item[this.text].toLowerCase().includes(this.filter.toLowerCase()))
            } else {
                return this.items
            }
        }
    },
    data: function () {
        return {
            rootStyle: {
                display: 'inline-block',
                padding: '.429rem .929rem',
                border: '1px solid #767676',
                'border-radius': '.215rem',
                height: '12em',
                'min-width': '10em',
                color: 'inherit',
                'font-family': 'inherit',
                position: 'relative'
            },
            collapsibleStyle: {
                borderRadius: 'var(--default-border-radius)',
                border: '1px solid #a7a2a2',
                padding: '0.25em 0 0.25em 0.5em',
                userSelect: 'none',
                background: 'url(../images/arrow.png) right / 20px no-repeat #f3f3f3'
            },
            labelStyle: {
                display: 'block'
            },
            selectedItemsVirtual: [],
            selectAll: false,
            filter: null,
            expand: true
        }
    },
    methods: {
        handleChange() {
            this.handleSelectAllCheckbox()
            this.$emit('update:selectedItems', this.selectedItemsVirtual)
            this.$emit('change')
        },
        selectAllChanged() {
            if(this.selectAll) {
                this.selectedItemsVirtual = this.filteredItems.map(item => item[this.value])
            } else {
                this.selectedItemsVirtual = []
            }
            this.handleChange()
        },
        handleSelectAllCheckbox() {
            if(this.items) {
                if(this.selectedItemsVirtual.length < this.items.length) {
                    this.selectAll = false
                }
                if(this.selectedItemsVirtual.length > 0 && this.selectedItemsVirtual.length === this.items.length) {
                    this.selectAll = true
                }
            }
        },
        clickOutside(e) {
            if(this.collapsible) {
                Vue.nextTick(() => {
                    if(this.expand && !e.target.classList.contains('checkbox-multiselect-selector')) {
                        this.expand = false
                    }
                })
            }
        }
    },
    watch: {
        selectedItems() {
            this.selectedItemsVirtual = this.selectedItems
            this.handleSelectAllCheckbox()
        },
        items(newItems, oldItems) {
            if(this.resetSelectedItemsOnItemsChange && oldItems) {
                if(oldItems.length > 0) {
                    this.selectedItemsVirtual = []
                    this.handleChange()
                }
            }
        }
    },
    created() {
        if(typeof this.selectedItems === 'object') {
            this.selectedItemsVirtual = this.selectedItems
        } else {
            this.selectedItemsVirtual = []
        }
        if(this.selectedItemsVirtual) {
            this.handleSelectAllCheckbox()
        }
        if(this.collapsible) {
            this.rootStyle.position = 'absolute'
            this.rootStyle.backgroundColor = 'white'
            this.rootStyle.zIndex = '2'
            this.expand = false
        }
    },
    mounted() {
        if(this.$el.style.width) {
            this.rootStyle.width = this.$el.style.width

            if(this.containerHeight) {
                this.rootStyle.height = this.containerHeight
            }

            this.$forceUpdate()
        }
    },
    directives: {
        'click-outside': {
            bind(el, binding, vnode) {
                el.clickOutsideEvent = function (event) {
                    // here I check that click was outside the el and his childrens
                    if (!(el == event.target || el.contains(event.target))) {
                        // and if it did, call method provided in attribute value
                        vnode.context[binding.expression](event)
                    }
                }
                document.body.addEventListener('click', el.clickOutsideEvent)
            },
            unbind(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent)
            }
        }
    }
}
</script>

<style scoped>
.pos-a {
    position: absolute;
}

.o-a {
    overflow: auto;
}

input[type="checkbox"] {
    vertical-align: -2px;
}
</style>
