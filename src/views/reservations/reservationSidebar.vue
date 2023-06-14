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
        async submitForm() {
            let params = {}
            if (this.selectedObject) params.object_id = this.selectedObject.object_id;
            if (this.selectedCustomer) params.customerId = this.selectedCustomer.customer_id;
            if (this.selectedStatus) params.rStatus = this.selectedStatus;
            this.$emit('submit', params);
        },
        objectOnChange: debounce(async function (e) {

            if (e.target.value && e.target.value.length > 2) {
                let res = await objects_find({ name: e.target.value, plimit: 10000 });
                this.objects = res.data.objects.map(obj => {
                    return {
                        name: obj.object_id + ' - ' + obj.name,
                        object_id: obj.object_id,
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
        },
        selectedCustomer: function (customer) {
            console.log(customer);
        }
    },
}

</script>


<template>
    <div class="col-lg-2 pe-lg-0 col-12">
        <nav class="navbar navbar-expand-lg d-block bg-light sidebar-search mb-lg-0 mb-4 h-100"><button
                class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#secondNavbar"
                aria-controls="secondNavbar" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse px-2" id="secondNavbar">
                <ul class="navbar-nav flex-column w-100">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="row g-0">
                                <div class="col-lg-6 col-12"><button @click="submitForm"
                                        class="btn btn-secondary text-white find-btn fw-bold border-0"> Pretraga </button>
                                </div>
                                <div class="col-lg-6 col-12"><button
                                        class="btn btn-warning text-secondary find-btn fw-bold border-0"> Reset </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 sadrzaj col-12">
                            <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Smještaj</label>
                                <v-select class="bg-white" v-model="selectedObject" @input="objectOnChange"
                                    placeholder="Naziv ili id smještaja" required label="name" :options="objects">
                                </v-select>
                            </div>
                        </div>
                        <div class="mt-3 sadrzaj col-12">
                            <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Kupac</label>
                                <v-select class="bg-white" v-model="selectedCustomer" @input="customerOnChange" label="name"
                                    placeholder="Ime kupca" :options="customers">
                                </v-select>
                            </div>
                        </div>
                        <div class="mt-3 sadrzaj col-12">
                            <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Statzs</label>
                                <v-select class="bg-white" placeholder="Odaberite status" v-model="selectedStatus"
                                    :required="true" :options="statuses">
                                </v-select>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>