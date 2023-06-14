<script>
import { reservations_find, update_reservation } from '@/middleware/routes/reservations';
import moment from 'moment'

export default {
    props: ['_id'],
    data() {
        return {
            object: null,
            statuses: ['Offer', 'Active', 'Canceled', 'Reservation'],
        }
    },
    async mounted() {
        let res = await reservations_find({ _id: this._id });
        this.object = res.data.reservations[0];
        this.object.formCustomer = this.object.customer[0].firstName + ' ' + this.object.customer[0].lastName;
        this.object.formObject = this.object.objects[0].object_id + ' ' + this.object.objects[0].name;
        this.object.formPeriod = moment(this.object.dateFrom).format('DD.MM.YYYY') + ' - ' 
            + moment(this.object.dateTo).format('DD.MM.YYYY');
    },
    methods: {
        async updateObject() {
            let res = await update_reservation(this.object);
            this.$emit('postUpdate', res.data);
        }
    }
}

</script>
    

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form class="modal-content" @submit.prevent="updateObject">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Izmjeni rezervaciju</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="object">
                        <div class="row">

                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Naziv smještaja</label><input type="text" disabled v-model="object.formObject" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Period rezervacije</label><input type="text" disabled v-model="object.formPeriod" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Kupac</label><input type="text" disabled v-model="object.formCustomer" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Ukupno</label><input type="number" disabled v-model="object.total" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                        Status</label>
                                    <v-select placeholder="Odaberite status" v-model="object.status" :required="true" :options="statuses">
                                        <template #search="{ attributes, events }">
                                            <input class="vs__search" :required="!object.status" v-bind="attributes"
                                                v-on="events" />
                                        </template>
                                    </v-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zatvori</button>
                    <button type="submit" class="btn btn-primary">Spremi izmjene</button>
                </div>
            </form>
        </div>
    </div>
</template>