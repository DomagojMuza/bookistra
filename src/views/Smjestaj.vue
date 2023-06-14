<script>
import sidebar from './smjestaj/sidebar.vue';
import objectList from './smjestaj/objectList.vue';
import editModal from './smjestaj/editModal.vue';
import addModal from './smjestaj/addModal.vue';
import pagination from '@/components/pagination.vue';
import { getUrlData, setUrlData } from '../functions/globals';
import { objects_find } from '../middleware/routes/object_catalogue';
import { Modal } from 'bootstrap';


export default {

    data() {
        return {
            formData: [
                { name: 'name', label: 'Smještaj (id ili naziv)', value: '', type: 'text' },
                { name: 'maxObjectPersons', label: 'Broj osoba', value: '', type: 'number' },
                { name: 'numberOfBathrooms', label: 'Broj kupaona', value: '', type: 'number' },
                { name: 'rooms', label: 'Broj soba', value: '', type: 'number' },
                { name: 'distanceSea', label: 'Do mora (m)', value: '', type: 'number' },
                { name: 'distanceCenter', label: 'Do centra (m)', value: '', type: 'number' },
                { name: 'distanceBeach', label: 'Do plaže (m)', value: '', type: 'number' },

                { name: 'skip', value: '', type: 'number' },

                { name: 'pool', label: 'Bazen', value: false, type: 'checkbox' },
                { name: 'parking', label: 'Parking', value: false, type: 'checkbox' },
                { name: 'ac', label: 'Klima', value: false, type: 'checkbox' },
                { name: 'pets', label: 'Ljubimci', value: false, type: 'checkbox' },
                { name: 'satTV', label: 'TV', value: false, type: 'checkbox' },
                { name: 'grill', label: 'Roštilj', value: false, type: 'checkbox' },
                { name: 'internet', label: 'Internet', value: false, type: 'checkbox' },
                { name: 'washingMachine', label: 'Perilica', value: false, type: 'checkbox' },
                { name: 'seaView', label: 'Pogled na more', value: false, type: 'checkbox' },
            ],
            objects: [

            ],
            count: 0,
            skip: 1,
            _openEditModal: null,
            _addObjectModal: null,
            _id: null,
        }
    },
    components: {
        sidebar,
        objectList,
        pagination,
        editModal,
        addModal
    },
    methods: {
        formChange(params) {
            params.skip = 1;
            setUrlData(params);
            this.getObjects(params);
        },
        pageChange(params) {
            let data = getUrlData();
            data.skip = params.skip;
            setUrlData(data);
            this.getObjects(data);

        },
        async getObjects(params = {}) {
            if (params.skip) this.skip = +params.skip;
            this.objects = []
            let res = await objects_find(params);
            this.count = res.data.count;
            this.objects = res.data.objects;
        },
        updateObjectInDOM(object) {
            if (object && object._id) {
                this.objects.forEach((elem, index) => {
                    if (elem._id === object._id) this.objects[index] = object;
                })
            }
        },
        openAddObjectModal() {
            let element = this.$refs.addObjectModalRef.$el;
            this._addObjectModal = new Modal(element, {});
            this._addObjectModal.show();

        },
        closeAddObjectModal(params) {
            this._addObjectModal.hide();
            this.formChange(params);
        },
        openEditModal(_id) {
            this._openEditModal = null;
            this._openEditModal = 'editModal';
            this._id = _id;

            setTimeout(() => {
                let element = this.$refs.modal.$el;
                console.log(element);
                let shareModal = new Modal(element, {});
                shareModal.show();
                element.addEventListener('hidden.bs.modal', () => {
                    this._openEditModal = null;
                })
            }, 100);
        },
        async removeObjectFromDom(_id) {
            let data = getUrlData();
            await this.getObjects(data);
        }

    },

    async mounted() {
        let params = getUrlData();
        this.formData.forEach(elem => {
            if (elem.type == 'number' && params[elem.name] > 0) elem.value = params[elem.name];
            if (elem.type == 'checkbox' && params[elem.name]) elem.value = true;
            else if (params[elem.name]) elem.value = params[elem.name];
        })
        await this.getObjects(params);

    }
}

</script>
<template>
    <div class="row g-0">
        <div class="col-lg-2 pe-lg-0 col-12">
            <sidebar @submit="formChange" :formData="formData" />
        </div>
        <div class="col">
            <div class="d-flex justify-content-between my-2 px-3">
                <button class="btn btn-sm btn-primary py-0 px-2" @click="openAddObjectModal">Dodaj smještaj</button>
                <pagination class="" v-if="objects.length" :count="count" :skip="skip" :limit="10"
                    @pageChange="pageChange" />
            </div>
            <objectList :objects="objects" @showDetails="openEditModal" @emitDeleteObject="removeObjectFromDom" />
        </div>
        <component v-if="_openEditModal" ref="modal" :is="_openEditModal" :_id="_id" @postUpdate="updateObjectInDOM" />
        <addModal ref="addObjectModalRef" @objectAdded="closeAddObjectModal" />
    </div>
</template>