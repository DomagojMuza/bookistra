<script>
import sidebar from './reservations/reservationSidebar.vue';
import objectList from './reservations/objectList.vue';
import editModal from './reservations/editModal.vue';
import addModal from './reservations/addModal.vue';
import pagination from '@/components/pagination.vue';
import { getUrlData, setUrlData } from '../functions/globals';
import { reservations_find } from '../middleware/routes/reservations';
import { Modal } from 'bootstrap';


export default {

    data() {
        return {
            formData: [
                { name: 'name', label: 'Naziv', value: '', type: 'text' },
                { name: 'email', label: 'Email', value: '', type: 'text' },
            ],
            customers: [

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
            this.customers = []
            let res = await reservations_find(params);
            console.log(res);
            this.count = res.data.count;
            this.customers = res.data.reservations;
        },
        updateObjectInDOM(object)
        {
            if (object && object._id)
            {
                this.customers.forEach((elem, index) => {
                    if (elem._id === object._id) this.customers[index] = object;
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
            <sidebar @submit="formChange" :formData="formData" />
        <div class="col">
            <div class="d-flex justify-content-between my-2 px-3">
                <button class="col-lg-auto col btn btn-sm btn-primary py-lg-0 py-3 px-2" @click="openAddObjectModal">Add new reservation</button>
                <pagination class="col-lg-auto col-12 mt-lg-0 mt-3" v-if="customers.length" :count="count" :skip="skip" :limit="20"
                    @pageChange="pageChange" />
            </div>
            <objectList :customers="customers" @showDetails="openEditModal" @emitDeleteObject="removeObjectFromDom" />
        </div>
        <component v-if="_openEditModal" ref="modal" :is="_openEditModal" :_id="_id" @postUpdate="updateObjectInDOM" />
        <addModal ref="addObjectModalRef" @objectAdded="closeAddObjectModal" />
    </div>
</template>