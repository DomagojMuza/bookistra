<script>
import object_list_card from './object_list_card.vue';


export default {
    props: ['objects'],
    components: {
        object_list_card
    },
    data() {
        return {

        }
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
    <div v-if="objects" class="object-list">
        <object_list_card v-for="object in objects" :object="object" @showDetailsCard="openModal" @objectDeleted="passDeletedToList" />
    </div>
</template>