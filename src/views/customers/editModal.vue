<script>
import { customers_find, update_customer } from '@/middleware/routes/customers';

export default {
    props: ['_id'],
    data() {
        return {
            object: null,
        }
    },
    async mounted() {
        let res = await customers_find({ _id: this._id });
        this.object = res.data.customers[0];
        console.log(this.object);
    },
    methods: {
        async updateObject() {
            let res = await update_customer(this.object);
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
                    <h5 class="modal-title" id="exampleModalLabel">Izmjeni podake o kupcu</h5>
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