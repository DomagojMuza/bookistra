<script>
import { getObjectImgUrl } from '@/functions/globals';
import { delete_reservation } from '@/middleware/routes/reservations';
import moment from 'moment'


export default {
    props: ['object'],
    methods: {
        openModal(_id) {
            this.$emit('showDetailsCard', _id);
        },
        getImage(object) {
            this.image = getObjectImgUrl(object)
        },
        async deleteObject() {
            console.log(this.object);
            if (confirm('Do you really want to delete reservation')) {
                let res = await delete_reservation(this.object._id);
                if (res.data) this.$emit('objectDeleted', this.object._id);
            }
        }
    },
    data() {
        return {
            image: null,
        }
    },
    created() {
        this.moment = moment;
        let dateFrom = new Date(this.object.dateFrom);
        let dateTo = new Date(this.object.dateTo);
        this.object.dataFromPreview = dateFrom.toISOString().substring(0, 10)
        this.object.dataToPreview = dateTo.toISOString().substring(0, 10)
    },


}

</script>

<template>
    <div v-if="object" class="row border-dark mx-3 mt-3 shadow border-botom mb-4 px-2 py-2 bg-light">


        <div class="col-lg-1">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Status:</span>
            {{ object.status }}
            <!-- {{ object.lastName }} -->
        </div>
        <div class="col-lg-2">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Period:</span>
            {{ moment(object.dataFromPreview).format("D.M.YYYY") }} - {{ moment(object.dataToPreview).format("D.M.YYYY") }}
        </div>
        <div class="col-lg-1">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Ukupno:</span>
            {{ object.total }} €
        </div>
        <div class="col-lg-3">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Smještaj:</span>
            {{ object.objects.length ? object.objects[0].object_id +' - '+ object.objects[0].name : '???' }}
        </div>
        <div class="col-lg-3">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Kupac:</span>
            {{ object.customer.length ? object.customer[0].firstName +' '+ object.customer[0].lastName : '???' }}
        </div>
        <div class="col-lg col-12 text-end">
            <div class="row h-100 g-0 align-items-center justify-content-lg-end justify-content-between">
                <div class="col-lg-auto col text-center pointer px-3 py-2" title="Uredi">
                    <div class="btn btn-warning">
                        <div @click="openModal(object._id)">
                            <i class="las la-pen la-lg"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-auto col text-center pointer px-3 py-2" title="Obrisi objekt">
                    <div class="btn btn-danger" @click="deleteObject(object._id)">
                            <i class="las la-trash la-lg text-white"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>