<script>
import { pricelist_items } from '@/middleware/routes/pricelist';
import pricelist_item_card from './pricelist_item_card.vue';
import addModal from './addModal.vue';
import { Modal } from 'bootstrap';


export default {
    props: ['name'],
    components: {
        pricelist_item_card, addModal
    },
    data() {
        return {
            pricelistItems: [],
            object: null,
            object_id: null,
            addItemModal: null
        }
    },
    async created() {
        this.object_id = this.$route.params._id;
        let res = await pricelist_items(this.$route.params._id);
        this.pricelistItems = res.data
        this.object = this.pricelistItems[0].object[0]
    },
    methods: {
        resetItem(item) {
            this.pricelistItems.forEach( (elem, index) => {
                if (elem._id === item._id) this.pricelistItems[index] = item;
            });
        },
        openAddPricelistModal() {
            let element = this.$refs.addModal.$el;
            this.addItemModal = new Modal(element, {});
            this.addItemModal.show();
        },
        removeItemFromDom(_id) {
            this.pricelistItems = this.pricelistItems.filter(item => {
                return !(item._id == _id)
            })
        },
        addItemToDom(item) {
            this.pricelistItems.push(item)
            this.addItemModal.hide();
        }
    },
    
}
</script>

<template>
    <div class="container">
        <div class="my-4">
            <h3 v-if="object">Cijenik za smještaj {{ object.name }}</h3>
            <div class="btn btn-primary mb-2" @click="openAddPricelistModal">Dodaj stavku</div>
            <div v-if="pricelistItems.length" class="row gy-4">
                <div class="col-12">
                    <div class="row d-lg-flex d-none">
                        <div class="col-2">Datum od</div>
                        <div class="col-2">Datum do</div>
                        <div class="col-2">Cijena (€)</div>
                    </div>
                </div>
                <pricelist_item_card v-for="item in pricelistItems" class="col-12" :item="item" @resetItemData="resetItem" @itemDeleted="removeItemFromDom" />
            </div>
            <div v-else>
                <h1 class="text-center">Object has no pricelist</h1>
            </div>
        </div>
        <addModal v-if="object_id" :object_id="object_id" @itemAdded="addItemToDom" ref="addModal" />
    </div>
</template>