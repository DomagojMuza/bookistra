<script>
import { update_pricelist_item, delete_pricelist_item } from '@/middleware/routes/pricelist';


export default {
    props: ['item'],
    data() {
        return {
            orginalItem: null,
        }
    },
    methods: {
        async updateItem(item) {
            try {
                let res = await update_pricelist_item(item);
            } catch (error) {
                this.$emit('resetItemData', this.orginalItem);
                alert(error.data);
            }
        },
        async deleteItem(item) {
            try {
                let res = await delete_pricelist_item(item);
                if (res.data) this.$emit('itemDeleted', item._id);
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.item.dateFrom = new Date(this.item.dateFrom).toISOString().substring(0, 10);
        this.item.dateTo = new Date(this.item.dateTo).toISOString().substring(0, 10);
        this.orginalItem = { ... this.item }
    },
}
</script>

<template>
    <div v-if="item" class="col-12">
        <form @submit.prevent="updateItem(item)" class="row align-items-center bg-ligh py- border-botto border-to border-dark">
            <div class="col-lg-2 ps-lg-0 ">
                <div class="row g-0 align-items-center">
                    <div class="col-lg-auto col-4">
                        <div class="d-lg-none ">Date from</div>
                    </div>
                    <div class="col">
                        <input class="form-control rounded-0 border-dark" required v-model="item.dateFrom" type="date"
                            name="dateFrom" placeholder="Date from">
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="row g-0 align-items-center">
                    <div class="col-lg-auto col-4">
                        <div class="d-lg-none ">Date to</div>
                    </div>
                    <div class="col">
                        <input class="form-control rounded-0 border-dark" required v-model="item.dateTo" type="date"
                            name="dateFrom" placeholder="Date to">
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="row g-0 align-items-center">
                    <div class="col-lg-auto col-4">
                        <div class="d-lg-none ">Price (€)</div>
                    </div>
                    <div class="col">
                        <input type="number" name="price" required class="form-control rounded-0  border-dark" step="0.1" v-model="item.price" id="">
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-12 mt-lg-0 mt-2">
                <div class="d-flex justify-content-lg-start justify-content-end">
                    <button class="btn btn-primary btn-sm" type="submit">Update</button>
                    <div class="btn btn-warning btn-sm ms-3" @click="deleteItem(item)">Delete</div>
                </div>
            </div>
        </form>
    </div>
</template>