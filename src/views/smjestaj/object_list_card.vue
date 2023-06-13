<script>
import { getObjectImgUrl } from '@/functions/globals';
import { delete_object } from '@/middleware/routes/object_catalogue';



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
            if (confirm('Do you really want to delete object'))
            {
                let res = await delete_object(this.object._id);
                if ( res.data ) this.$emit('objectDeleted', this.object._id);
            }
        }
    },
    data() {
        return {
            image: null,
        }
    },
    created() { 
        this.getImage(this.object) 
    },
    watch: {
        object(newObject, oldObject) {
            this.getImage(newObject)
        }
    }

}

</script>

<template>
    <div v-if="object" class="row g-0 border-dark shadow border-botom mb-4 bg-light">
            <div class="col-auto d-lg-block d-none">
                <img :src="image" class="img-fluid bg-dark">
            </div>
            <div class="col px-2 py-1">
                <div class="h4 fw-normal">{{ object.name }}</div>
                <div class="h6 fw-normal">{{ object.place }}</div>
                <p class="mb-0 small">Max. osoba: {{ object.maxObjectPersons || '??' }}</p>
                <p class="mb-0 small">Broj kupaona: {{ object.numberOfBathrooms || '??' }}</p>
            </div>
            <div class="col-4 d-lg-flex d-none">
                <div class="row g-0 h-100">
                    <div class="col-6 h-100">
                        <div class="d-flex align-items-center flex-wrap h-100">
                            <div>
                                <div>Udaljenost od mora</div>
                                <div class="h3">{{ object.distanceSea ? object.distanceSea + ' m' : '???' }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row h-100 g-0 align-items-center">
                            <div class="col-6">
                                <div>
                                    <i class="las la-swimming-pool la-2x"></i>
                                    <span class="h4 ms-1">
                                        {{ object.pool ? 'Da' : 'Ne' }}
                                    </span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <i class="las la-dog la-2x"></i>
                                    <span class="h4 ms-2">
                                        {{ object.pets ? 'Da' : 'Ne' }}
                                    </span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <i class="las la-parking la-2x"></i>
                                    <span class="h4 ms-2">
                                        {{ object.parking ? 'Da' : 'Ne' }}
                                </span>
                            </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <i class="las la-fan la-2x"></i>
                                    <span class="h4 ms-2">
                                        {{ object.ac ? 'Da' : 'Ne' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-2 col-3 bg-warning">
                <div class="row h-100 g-0 align-items-center">
                    <div class="col-lg-6 col-12 text-center pointer" title="Uredi">
                        <div>
                            <div @click="openModal(object._id)">
                                <i class="las la-pen la-2x"></i>
                            </div>
                        </div>
                    </div>
                    <router-link :to="{ name: 'pricelist', params: { _id: object.object_id }}" target='_blank' class="col-lg-6 col-12 text-center pointer" title="Cjenik">
                        <div>
                            <i class="las la-euro-sign la-2x"></i>
                        </div>
                    </router-link>
                    <div class="col-12 text-center pointer" title="Obrisi objekt">
                        <div>
                            <div @click="deleteObject(object._id)">
                                <i class="las la-trash la-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>