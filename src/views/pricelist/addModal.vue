<script>
import { add_pricelist_item } from '@/middleware/routes/pricelist';


export default {
    props: ['object_id'],
    data() {
        return {
            item: {
                dateFrom: null,
                dateTo: null,
                price: null,
                object_id: this.object_id
            }
        }
    },
    methods: {
        async addPricelistItem() {
            try {
                let res = await add_pricelist_item(this.item);
                this.item.dateFrom = null;
                this.item.dateTo = null;
                this.item.price = null;
                this.$emit('itemAdded', res.data)
            } catch (error) {
                
            }
            
        }
        
    },
}
</script>

<template>
    <div class="modal fade" id="addPricelistItemModal" tabindex="-1" aria-labelledby="addPricelistItemModalLabel"
        aria-hidden="true">
        <form @submit.prevent="addPricelistItem" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addPricelistItemModalLabel">Dodaj novu stavku cjenika</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="ps-2">
                        <div class="col-12">
                            <div class="row d-lg-flex d-none">
                                <div class="col-4 ps-0">Datum od</div>
                                <div class="col-4">Datum do</div>
                                <div class="col-4">Cijena (€)</div>
                            </div>
                        </div>
                        <div class="row align-items-center bg-ligh py- border-botto border-to border-dark">
                            <div class="col-lg-4 ps-lg-0 ">
                                <div class="row g-0 align-items-center">
                                    <div class="col-lg-auto col-4">
                                        <div class="d-lg-none ">Datum od</div>
                                    </div>
                                    <div class="col">
                                        <input class="form-control rounded-0 border-dark" required v-model="item.dateFrom"
                                            type="date" name="dateFrom" placeholder="Datum od">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="row g-0 align-items-center">
                                    <div class="col-lg-auto col-4">
                                        <div class="d-lg-none ">Datum do</div>
                                    </div>
                                    <div class="col">
                                        <input class="form-control rounded-0 border-dark" required v-model="item.dateTo" type="date"
                                            name="dateFrom" placeholder="Datum do">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="row g-0 align-items-center">
                                    <div class="col-lg-auto col-4">
                                        <div class="d-lg-none ">Cijena (€)</div>
                                    </div>
                                    <div class="col">
                                        <input type="number" required name="price" step="0.1" placeholder="Cijena (€)"
                                            class="form-control rounded-0  border-dark" v-model="item.price" id="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zatvori</button>
                    <button type="submit" class="btn btn-primary" >Spremi izmjene</button>
                </div>
            </div>
        </form>
    </div>
</template>


