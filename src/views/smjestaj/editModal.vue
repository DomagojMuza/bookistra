<script>
import { objects_find, update_object } from '@/middleware/routes/object_catalogue';

export default {
    props: ['_id'],
    data() {
        return {
            object: null,
        }
    },
    async mounted() {
        let res = await objects_find({ _id: this._id });
        this.object = res.data.objects[0];
        console.log(this.object);
    },
    methods: {
        async updateObject() {
            let res = await update_object(this.object);
            this.$emit('postUpdate', res.data);
        }
    }
}

</script>
    

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Izmjeni podatke o smještaju</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-if="object">
                        <div class="row">

                            <div class="mt-3 sadrzaj col-12">
                                <div><label for="objectName" class="form-label mb-0 mt-2 text-dark">
                                    Naziv smještaja</label><input type="text" v-model="object.name" name="name" id=""
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
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zatvori</button>
                    <button type="button" class="btn btn-primary" @click="updateObject">Spremi izmjene</button>
                </div>
            </div>
        </div>
    </div>
</template>