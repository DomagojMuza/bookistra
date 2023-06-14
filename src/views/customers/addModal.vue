<script>
import { add_customer } from '@/middleware/routes/customers';

export default {
    data() {
        return {
            object: {},
        }
    },
    async mounted() {
      
    },
    methods: {
        async addObject() {
            let res = await add_customer(this.object);
            if (res.data._id) this.$emit('objectAdded', {name: res.data.object_id});
            this.object = {};
        }
    }
}

</script>
    

<template>
    <div class="modal fade" id="addObjectModal" tabindex="-1" aria-labelledby="addObjectModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form class="modal-content" @submit.prevent="addObject">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Dodaj novog kupca</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="object">
                        <div class="row">

                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Ime</label><input type="text" required v-model="object.firstName" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Prezime</label><input type="text" required v-model="object.lastName" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Email</label><input type="text" required v-model="object.email" name="name" id=""
                                        class="form-control border border-dark"></div>
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