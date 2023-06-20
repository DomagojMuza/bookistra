<script>
import { getObjectImgUrl } from '@/functions/globals';
import { delete_customer } from '@/middleware/routes/customers';



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
            if (confirm('Do you really want to delete object')) {
                let res = await delete_customer(this.object._id);
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
    },


}

</script>

<template>
    <div v-if="object" class="row border-dark mx-3 mt-3 shadow border-botom mb-4 px-2 py-2 bg-light">


        <div class="col-lg-3">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Ima/Prezime:</span>
            {{ object.firstName }}
            {{ object.lastName }}
        </div>
        <div class="col-lg-3">
            <span class="small fw-bold d-lg-none d-block mb-0 lh-1 mt-2">Email:</span>
            {{ object.email.toLowerCase() }}
        </div>
        <div class="col-lg col-12 text-end">
            <div class="row h-100 g-0 align-items-center justify-content-lg-end justify-content-between">
                <div class="col-lg-auto col text-center pointer bg-warnin px-3 py-2" title="Uredi">
                    <div class="btn btn-warning" @click="openModal(object._id)">
                            <i class="las la-pen la-lg"></i>
                    </div>
                </div>
                <div class="col-lg-auto col text-center pointer bg-warnin px-3 py-2" title="Obrisi objekt">
                    <div class="btn btn-danger" @click="deleteObject(object._id)">
                            <i class="las la-trash la-lg text-white"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>