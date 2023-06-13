<script>
import { customers_find } from '@/middleware/routes/customers';
import { objects_find } from '@/middleware/routes/object_catalogue';
import { calculation } from '@/middleware/routes/pricelist';
import { add_reservation } from '@/middleware/routes/reservations';
import debounce from 'lodash.debounce'

export default {
    data() {
        return {
            object: {},
            objectName: '',
            objects: [],
            selectedObject: null,
            customers: [],
            selectedCustomer: null,
            date: null,
            allowedDates: [],
            total: 0,
            statuses: ['Offer', 'Active', 'Canceled', 'Reservation'],
            selectedStatus: null,

        }
    },
    async mounted() {

    },
    methods: {
        async addReservation() {
            let reservation = {
                objectId: this.selectedObject.object_id,
                customerId: this.selectedCustomer.customer_id,
                dateFrom: new Date(this.date[0]),
                dateTo: new Date(this.date[1]),
                total: this.total,
                status: this.selectedStatus
            }
            console.log(reservation);
            let res = await add_reservation(reservation);   
            console.log(res);
            // if (res.data._id) this.$emit('objectAdded', { name: res.data.object_id });
            // this.object = {};
        },
        objectOnChange: debounce(async function (e) {

            if (e.target.value && e.target.value.length > 2) {
                let res = await objects_find({ name: e.target.value, pricelistLookup: true, limit: 10000 });
                this.objects = res.data.objects.map(obj => {
                    return {
                        name: obj.object_id + ' - ' + obj.name,
                        object_id: obj.object_id,
                        pricelist: obj.pricelist || []
                    }
                });
                console.log(this.objects);
            }
        }, 500),
        customerOnChange: debounce(async function (e) {
            if (e.target.value && e.target.value.length > 2) {
                let res = await customers_find({ name: e.target.value, limit: 10000 });
                this.customers = res.data.customers.map(customer => {
                    return {
                        name: customer.firstName + ' ' + customer.lastName,
                        _id: customer._id,
                        customer_id: customer.customerId,
                    }
                });
                console.log(this.customers);
            }
        }, 500),
        getDatesBetween(startDate, endDate) {
            startDate = new Date(startDate);
            endDate = new Date(endDate);

            const dates = [];

            const today = new Date();

            const currentDate = new Date(startDate.getTime());
            while (currentDate <= endDate) {
                if (currentDate >= today) dates.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return dates.flat();
        },
        format(dates) {

            let dateFrom = '';
            let dateTo = '';

            if (dates[0]) dateFrom = new Date(dates[0]);
            if (dates[1]) dateTo = new Date(dates[1]);

            let res = '';
            if (dateFrom) res += dateFrom.toISOString().substring(0, 10);
            if (dateTo) res += ' - ' + dateTo.toISOString().substring(0, 10);
            return res;
        },
        async handleDate(date) {
            console.log(date);
            let dateFrom = new Date(date[0]);
            let dateTo = new Date(date[1]);
            let res = await calculation({
                object_id: this.selectedObject.object_id,
                dateFrom: dateFrom,
                dateTo: dateTo
            });
            this.total = res.data.total || 0;
        },
    },
    watch: {
        // whenever question changes, this function will run
        selectedObject: function (obj) {
            console.log(obj);
            if (obj && obj.pricelist) {
                this.allowedDates = obj.pricelist.map(pi => {
                    return this.getDatesBetween(pi.dateFrom, pi.dateTo);
                });
                this.allowedDates = this.allowedDates.flat();
            }
        },
        selectedCustomer: function (customer) {
            console.log(customer);
        }
    },
}

</script>
    

<template>
    <div class="modal fade" id="addObjectModal" tabindex="-1" aria-labelledby="addObjectModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form class="modal-content" @submit.prevent="addReservation">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add reservation </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="object">
                        <div class="row">

                            <div class="mt-3 sadrzaj col-12">
                                <div>
                                    <label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Select object</label>
                                    <v-select v-model="selectedObject" @input="objectOnChange"
                                        placeholder="Enter object name or id" required label="name" :options="objects"
                                        :required="!selectedObject">
                                        <template #search="{ attributes, events }">
                                            <input class="vs__search" :required="!selectedObject" v-bind="attributes"
                                                v-on="events" />
                                        </template>
                                    </v-select>
                                </div>
                            </div>
                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Reservation period</label>
                                    <VueDatePicker v-model="date" :allowed-dates="allowedDates" required
                                        :disabled="selectedObject == null" @update:model-value="handleDate" :format="format"
                                        :preview-format="format" placeholder="Select Date" range multi-calendars />
                                </div>
                            </div>
                            <div class="mt-3 sadrzaj col-12">
                                <div>
                                    <label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Customer</label>
                                    <v-select v-model="selectedCustomer" @input="customerOnChange" label="name"
                                        placeholder="Enter customer name" required
                                        :options="customers">
                                        <template #search="{ attributes, events }">
                                            <input class="vs__search" :required="!selectedCustomer" v-bind="attributes"
                                                v-on="events" />
                                        </template>
                                    </v-select>
                                </div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Total</label><input type="number" required v-model="total" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Status</label>
                                    <v-select placeholder="Select status" v-model="selectedStatus" :required="true" :options="statuses">
                                        <template #search="{ attributes, events }">
                                            <input class="vs__search" :required="!selectedStatus" v-bind="attributes"
                                                v-on="events" />
                                        </template>
                                    </v-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import "vue-select/dist/vue-select.css";
</style>