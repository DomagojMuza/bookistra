<script>
import customer_list_card from './customer_list_card.vue';


export default {
    props: ['customers'],
    components: {
        customer_list_card
    },
    data() {
        return {

        }
    },
    created() {
        console.log(this.customers);
    },
    methods: {
        openModal(_id) {
            this.$emit('showDetails', _id);
        },
        passDeletedToList(_id) {
            this.$emit('emitDeleteObject', _id);
        }
    }

}

</script>


<template>
    <div v-if="customers" class="object-list">
        <div class="row mx-3 mt-3 d-lg-flex d-none">
            <div class="col-lg-1">
                <div class="fw-bold">Status</div>
            </div>
            <div class="col-lg-2">
                <div class="fw-bold">Period</div>
            </div>
            <div class="col-lg-1">
                <div class="fw-bold">Total</div>
            </div>
            <div class="col-lg-3">
                <div class="fw-bold">Object</div>
            </div>
            <div class="col-lg-3">
                <div class="fw-bold">Customer</div>
            </div>
        </div>
        <customer_list_card v-for="customer in customers" :object="customer" @showDetailsCard="openModal" @objectDeleted="passDeletedToList" />
    </div>
</template>