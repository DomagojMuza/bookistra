<script>
export default {
    props: ['count', 'skip', 'limit'],
    data() {
        return {
            maxPage: 1,
            maxPage: 0
        }
    },
    methods: {
        pageChange(skip)
        {
            this.$emit('pageChange', {skip: skip});
        }

    },
    mounted() {
        this.maxPage = Math.ceil(this.count / this.limit);
    }
}
</script>

<template>
    <nav aria-label="pagination">
        <ul class="pagination pointer">
            <li v-if="skip - 1 > 1" class="page-item" @click="pageChange(1)">
                <div class="page-link">1</div>
            </li>
            <li v-if="skip - 2 > 1" class="page-item" @click="pageChange(skip - 2)">
                <div class="page-link">{{ skip - 2 }}</div>
            </li>
            <li v-if="skip - 1 > 0" class="page-item" @click="pageChange(skip - 1)">
                <div class="page-link">{{ skip - 1 }}</div>
            </li>
            <li class="page-item active">
                <div class="page-link">{{ skip }}</div>
            </li>
            <li v-if="maxPage >= skip + 1" class="page-item" @click="pageChange(skip + 1)">
                <div class="page-link">{{ skip + 1 }}</div>
            </li>
            <li v-if="maxPage >= skip + 2" class="page-item" @click="pageChange(skip + 2)">
                <div class="page-link">{{ skip + 2 }}</div>
            </li>
            <li v-if="maxPage >= skip + 3" class="page-item" @click="pageChange(maxPage)">
                <div class="page-link">{{ maxPage }}</div>
            </li>

        </ul>
    </nav>
</template>