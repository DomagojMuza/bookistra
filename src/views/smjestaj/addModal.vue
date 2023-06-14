<script>
import { objects_find, add_object } from '@/middleware/routes/object_catalogue';

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
            let res = await add_object(this.object);
            console.log(res);
            if (res.data._id) this.$emit('objectAdded', {name: res.data.object_id});
            this.object = {};
        }
    }
}

</script>
    

<template>
    <div class="modal fade" id="addObjectModal" tabindex="-1" aria-labelledby="addObjectModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form @submit.prevent="addObject()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addObjectModalLabel">Dodaj smještaj</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <div class="row">

                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Naziv smještaja</label><input type="text" required v-model="object.name" name="name" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Broj osoba</label><input
                                        type="number" placeholder="" v-model="object.maxObjectPersons"
                                        name="maxObjectPersons" id="" class="form-control border border-dark">
                                </div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Broj
                                        kupaona</label><input type="number" v-model="object.numberOfBathrooms"
                                        placeholder="" name="numberOfBathrooms" id="" class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Broj soba</label><input
                                        type="number" v-model="object.rooms" placeholder="" name="rooms" id="" class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Do mora
                                        (m)</label><input type="number" v-model="object.distanceSea" placeholder="" name="distanceSea" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Do centra
                                        (m)</label><input type="number"  v-model="object.distanceCenter" placeholder="" name="distanceCenter" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">Do plaže
                                        (m)</label><input type="number"  v-model="object.distanceBeach" placeholder="" name="distanceBeach" id=""
                                        class="form-control border border-dark"></div>
                            </div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.pool" name="pool" id="">
                                    <div>Bazen</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.parking"  name="parking" id="">
                                    <div>Parking</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.ac" name="ac" id="">
                                    <div>Klima</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.pets" name="pets" id="">
                                    <div>Ljubimci</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.satTV" name="satTV" id="">
                                    <div>TV</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.grill" name="grill" id="">
                                    <div>Roštilj</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.internet" name="internet" id="">
                                    <div>Internet</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.washingMachine" name="washingMachine" id="">
                                    <div>Perilica</div>
                                </label></div>
                            <div class="mt-3 sadrzaj col-lg-6 col-12"><label type="checkbox"
                                    class="d-flex align-items-center mb-2"><input type="checkbox" class="me-2" v-model="object.seaView" name="seaView" id="">
                                    <div>Pogled na more</div>
                                </label></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zatvori</button>
                    <button type="submit" class="btn btn-primary" @click="updateObject">Spremi izmjene</button>
                </div>
            </form>
        </div>
    </div>
</template>