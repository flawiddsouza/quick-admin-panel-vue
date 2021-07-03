<template>
    <div class="datatable">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <slot name="actions"></slot>
            </div>
            <div>
                <button @click="refreshDataTable" :class="buttonClass"><i class="fas fa-sync-alt" :class="{ 'fa-spin': refreshingDataTable }"></i> Refresh</button>
                <input type="search" v-model="filter" @input="filterItems" style="margin-left: 0.5em" placeholder="Search...">
            </div>
        </div>
        <br>
        <div class="table-container" :style="{ height: tableHeight }">
            <table>
                <thead>
                    <tr>
                        <th v-if="checkboxes" style="width: 45px; min-width: 45px">
                            <input type="checkbox" v-if="items.length > 0" @change="selectAllCheckboxes" ref="selectAllCheckboxesInput">
                        </th>
                        <th v-if="itemActionsSlotExists" :style="{ width: itemActionsWidth, minWidth: itemActionsWidth }">Actions</th>
                        <th v-for="field in fields" :class="{ active: sortField === field.field }" :style="{ width: field.width ?? false }" @click="sortColumn(field.field)">
                            {{ field.label }}
                            <span class="arrow" :class="sortOrder === 'asc' ? 'asc' : 'desc'"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!url || loading">
                        <td colspan="100%" class="ta-c">Loading</td>
                    </tr>
                    <template v-else>
                        <tr v-for="(item, index) in items">
                            <td class="ta-c" v-if="checkboxes" style="width: 45px; min-width: 45px">
                                <input type="checkbox" :value="item[checkboxField]" v-model="selectedCheckboxesVirtual">
                            </td>
                            <td class="ta-c" v-if="itemActionsSlotExists && index === 0" :style="{ width: itemActionsWidth, minWidth: itemActionsWidth }">
                                <slot name="item-actions" :item="item"></slot>
                            </td>
                            <td class="ta-c" v-if="itemActionsSlotExists && index !== 0">
                                <slot name="item-actions" :item="item"></slot>
                            </td>
                            <template v-for="field in fields">
                                <td v-html="getDisplayContent(field, item[field.field])"></td>
                            </template>
                        </tr>
                        <tr v-if="items.length === 0">
                            <td colspan="100%" class="ta-c">No records found</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <br>
        <div style="float: left">
            <template v-if="paginator.total > 0">
                From {{ paginator.from }} to {{ paginator.to }} of {{ paginator.total }} entries (filtered from {{ paginator.unfilteredTotal }} total records) {{ selectedItemsCountText }}
            </template>
            <template v-else>
                No records were found (filtered from {{ paginator.unfilteredTotal }} total records)
            </template>
        </div>
        <div class="paginator" :class="{ 'disable-all': loading }">
            <button :class="buttonClass" @click="fetchItemsForPage(paginator.firstPage)" :disabled="paginator.firstPage === paginator.currentPage">First</button>
            <button :class="buttonClass" @click="fetchItemsForPage(paginator.currentPage - 1)" :disabled="paginator.firstPage === paginator.currentPage">&lt;</button>
            <button @click="fetchItemsForPage(pageSwitch - 3)" :class="{active: (pageSwitch - 3) === paginator.currentPage, [buttonClass]: buttonClass ?? false}" v-if="paginator.lastPage >= pageSwitch - 3">{{ pageSwitch - 3 }}</button>
            <button @click="fetchItemsForPage(pageSwitch - 2)" :class="{active: (pageSwitch - 2) === paginator.currentPage, [buttonClass]: buttonClass ?? false}" v-if="paginator.lastPage >= pageSwitch - 2">{{ pageSwitch -2 }}</button>
            <button @click="fetchItemsForPage(pageSwitch - 1)" :class="{active: (pageSwitch - 1) === paginator.currentPage, [buttonClass]: buttonClass ?? false}" v-if="paginator.lastPage >= pageSwitch - 1">{{ pageSwitch - 1 }}</button>
            <button @click="fetchItemsForPage(pageSwitch)" :class="{active: pageSwitch === paginator.currentPage, [buttonClass]: buttonClass ?? false}" v-if="paginator.lastPage >= pageSwitch">{{ pageSwitch }}</button>
            <template v-if="paginator.lastPage > 4">
                <span>...</span>
                <button @click="fetchItemsForPage(paginator.lastPage - 1)" v-if="(paginator.lastPage - 1) > 0 && paginator.firstPage !== (paginator.lastPage - 1) && (paginator.lastPage - 1) > 4" :class="{active: (paginator.lastPage - 1) === paginator.currentPage, [buttonClass]: buttonClass ?? false}">{{ paginator.lastPage - 1 }}</button>
                <button @click="fetchItemsForPage(paginator.lastPage)" v-if="paginator.lastPage !== paginator.firstPage" :class="{active: paginator.lastPage === paginator.currentPage, [buttonClass]: buttonClass ?? false}">{{ paginator.lastPage }}</button>
            </template>
            <button :class="buttonClass" @click="fetchItemsForPage(paginator.currentPage + 1)" :disabled="paginator.lastPage === paginator.currentPage">&gt;</button>
            <button :class="buttonClass" @click="fetchItemsForPage(paginator.lastPage)" :disabled="paginator.lastPage === paginator.currentPage">Last</button>
        </div>
    </div>
</template>

<script>
function debounce(func, wait, immediate) {
    var timeout
    return function() {
        var context = this, args = arguments
        var later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

export default {
    props: {
        url: String,
        fields: Array,
        itemActionsWidth: String,
        bus: Object,
        tableHeight: String,
        limit: Number,
        checkboxes: Boolean,
        checkboxField: String,
        selectedCheckboxes: Array,
        hideItemActionsColumn: Boolean,
        demo: {
            type: Boolean,
            default: false
        },
        buttonClass: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            filter: '',
            items: [],
            paginator: {
                currentPage: null,
                firstPage: 1,
                lastPage: null,
                from: null,
                to: null,
                total: null,
                unfilteredTotal: null
            },
            pageSwitch: 4,
            sortField: '',
            previousSortField: '',
            sortOrder: 'asc',
            loading: false,
            refreshingDataTable: false,
            selectedCheckboxesVirtual: [],
            currentDataFreshnessTimestamp: null
        }
    },
    watch: {
        url() {
            if(this.url) {
                // reset sort
                this.sortField = ''
                this.previousSortField = ''
                this.sortOrder = 'asc'
                this.fetchItemsForPage(1, true, true)
            }
        },
        selectedCheckboxesVirtual() {
            this.$emit('update:selectedCheckboxes', this.selectedCheckboxesVirtual)
        }
    },
    computed: {
        itemActionsSlotExists() {
            return this.$slots['item-actions'] && this.hideItemActionsColumn === false
        },
        selectedItemsCountText() {
            if(this.selectedCheckboxes && this.selectedCheckboxes.length > 0) {
                return `(${this.selectedCheckboxes.length} selected)`
            } else {
                return ''
            }
        }
    },
    methods: {
        debounce(func, wait, immediate) {
            var timeout
            return function() {
                var context = this, args = arguments
                var later = function() {
                    timeout = null
                    if (!immediate) func.apply(context, args)
                }
                var callNow = immediate && !timeout
                clearTimeout(timeout)
                timeout = setTimeout(later, wait)
                if (callNow) func.apply(context, args)
            }
        },
        debouncedFetch: debounce(function() {
            this.fetchItemsForPage(1, false, true)
        }, 250),
        filterItems() {
            this.pageSwitch = 4
            this.debouncedFetch()
        },
        sortColumn(field) {
            this.sortField = field
            if(this.previousSortField !== this.sortField) {
                this.sortOrder = 'asc'
            } else {
                if(this.sortOrder === 'asc') {
                    this.sortOrder = 'desc'
                } else {
                    this.sortOrder = 'asc'
                }
            }
            this.previousSortField = this.sortField
            this.fetchItemsForPage(1, false, true)
        },
        fetchItemsForPage(page, created=false, bypassCurrentPageCheck=false) {
            if(page === this.paginator.currentPage && !bypassCurrentPageCheck) { // dont fetch when requesting same page as the current page
                return
            }
            if(page === this.paginator.firstPage) {
                this.pageSwitch = 4
            }
            if(page === this.paginator.lastPage) {
                let pageSwitch = this.paginator.lastPage - 2
                if(pageSwitch >= 4) {
                    this.pageSwitch = pageSwitch
                }
            }
            if(page === (this.paginator.lastPage - 1)) {
                let pageSwitch = (this.paginator.lastPage - 1) - 1
                if(pageSwitch >= 4) {
                    this.pageSwitch = pageSwitch
                }
            }
            if(this.paginator.lastPage <= 4 && this.pageSwitch < this.paginator.lastPage) {
                this.pageSwitch = 4
            }
            if(!created) {
                if(page == this.pageSwitch) {
                    if(this.paginator.lastPage - 2 !== this.pageSwitch && !(this.pageSwitch + 1 > this.paginator.lastPage)) {
                        if(this.paginator.lastPage > 5) {
                            this.pageSwitch++
                        }
                    }
                }
                if(page < this.paginator.currentPage) {
                    if(this.pageSwitch-1 > 3 && this.pageSwitch-1 < this.paginator.lastPage - 3) {
                        this.pageSwitch--
                    }
                    if(this.paginator.currentPage === this.paginator.lastPage - 4) {
                        if(this.pageSwitch-1 >= 4) {
                            this.pageSwitch--
                        }
                    }
                    if(page === this.pageSwitch - 3 && page > 1) {
                        this.pageSwitch--
                    }
                }
            }

            this.paginator.currentPage = page
            this.loading = true

            let url = this.url.split('?')
            if(url.length > 1) {
                url = this.url + '&'
            } else {
                url = this.url + '?'
            }

            if(this.checkboxes) { // reset checkboxes
                this.selectedCheckboxesVirtual = []
                this.$emit('update:selectedCheckboxes', [])
                if(this.$refs.selectAllCheckboxesInput) {
                    this.$refs.selectAllCheckboxesInput.checked = false
                }
            }

            if(this.demo) {
                this.items = []
                for(let i=0; i<20; i++) {
                    let item = {}
                    this.fields.forEach((field, index) => {
                        item[field.field] = `Row ${(i + 1 + (page === 1 ? 0 : page * 10))} Column ${index + 1}`
                    })
                    this.items.push(item)
                }
                this.paginator.currentPage = page
                this.paginator.lastPage = 8
                this.paginator.from = page === 1 ? 1 : (page * 10) + 1
                this.paginator.to =  page === 1 ? 20 : (page * 10) + 20
                this.paginator.total = 20 * 8
                this.paginator.unfilteredTotal = 20 * 8
                this.loading = false
                this.refreshingDataTable = false
                this.$emit('loaded')
                return
            }

            let currentDataFreshnessTimestamp = new Date().getTime()

            axios.get(`${url}page=${page}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit ? this.limit : ''}`).then(response => {
                response = response.data
                if(!response.paginator) {
                    console.error('%cDataTable', 'font-weight: bold', 'Given url does not implement laravel pagination')
                    return
                }

                if(this.currentDataFreshnessTimestamp && this.currentDataFreshnessTimestamp > currentDataFreshnessTimestamp) {
                    return
                } else {
                    this.currentDataFreshnessTimestamp = currentDataFreshnessTimestamp
                }

                this.items = response.paginator.data
                this.paginator.currentPage = response.paginator.current_page
                this.paginator.lastPage = response.paginator.last_page
                this.paginator.from = response.paginator.from
                this.paginator.to = response.paginator.to
                this.paginator.total = response.paginator.total
                this.paginator.unfilteredTotal = response.unfiltered_total
                this.loading = false
                this.refreshingDataTable = false
                this.$emit('loaded')
            })
        },
        refreshDataTable() {
            this.refreshingDataTable = true
            this.fetchItemsForPage(this.paginator.currentPage, false, true)
        },
        selectAllCheckboxes(e) {
            this.selectedCheckboxesVirtual = []
            if(e.target.checked) {
                this.items.forEach(item => {
                    this.selectedCheckboxesVirtual.push(item[this.checkboxField])
                })
            }
        },
        getDisplayContent(field, value) {
            if('transformValue' in field) {
                return field.transformValue(value)
            }
            return value
        }
    },
    created() {
        if(this.url) {
            this.fetchItemsForPage(1, true)
        }
        if(this.bus) {
            this.bus.on('refreshDataTable', () => {
                this.refreshDataTable()
            })
        }
        if(this.checkboxes) {
            this.$emit('update:selectedCheckboxes', [])
        }
    }
}
</script>

<style scoped>
.datatable .table-container {
    height: calc(100vh - 23em);
    overflow: auto;
}

.datatable table {
    width: 100%;
    border-collapse: collapse;
}

.datatable table th,
.datatable table td {
    white-space: nowrap;
    overflow: hidden;
}

.datatable tbody tr:first-child td {
    border-top: 0 !important;
}

.datatable button {
    min-width: 40px;
}

.datatable .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.4;
}

.datatable .active .arrow {
    opacity: 1;
}

.datatable .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid black;
}

.datatable .arrow.desc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid black;
}

.datatable .paginator button:not(.active) {
    outline: 0;
}

.datatable input[type="search"] {
    padding: 5.6px 10px;
    border: 1px solid darkgrey;
    border-radius: 3px;
}

.datatable input[type="search"]:focus {
    outline: 0;
}

.datatable > .w-100p > table th {
    text-align: center;
}

.datatable .ta-c {
    text-align: center;
}

.paginator {
    float: right;
}

.paginator button {
    margin-right: 0.3em;
}

.paginator button:last-child {
    margin-right: 0;
}

/* sticky table styles */
table td, table th {
    border: 1px solid var(--table-border-color, black);
    padding: 0.5em;
}

table thead th {
    position: sticky;
    top: 0;
    background-color: white;
}

table thead th, tbody tr:last-child th {
    border-top: 0;
    border-bottom: 0;
}

table tbody tr:first-child td {
    border-top: 0;
}

table tbody tr:nth-last-child(2) td {
    border-bottom: 0;
}

table thead th:after, tbody th:after {
    content: '';
    position: absolute;
    width: 100%;
    pointer-events: none;
}

table thead th:after, tbody th:after {
    left: 0;
    top: 0;
    border-top: 1px solid var(--table-border-color, black);
}

table thead th:after, tbody th:after {
    left: 0;
    bottom: 0;
    border-bottom: 1px solid var(--table-border-color, black);
}
</style>
