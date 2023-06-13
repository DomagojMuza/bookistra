<script>
export default {
    props: ['formData'],
    methods: {
        submit()
        {
            let submitForm = {};

            this.formData.forEach(elem => {
                console.log(elem.name, elem.value);
                if (elem.type == 'number' && elem.value > 0) submitForm[elem.name] = elem.value;
                if (elem.type == 'checkbox' && elem.value) submitForm[elem.name] = elem.value;
                else submitForm[elem.name] = elem.value;  
            })
            
            this.$emit('submit', submitForm);
        },
        resetForm()
        {
            this.formData.forEach(elem => {
                if (elem.type == 'checkbox') elem.value = false;
                else elem.value = '';  
            })
            this.$emit('submit', {});
        }
    },
    mounted() {
        let hash = location.hash.substr(1);

        let params = hash.split('&').reduce(function (res, item) {
            var parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
        }, {});

        this.formData.forEach(elem => {
            if (elem.type == 'number' && params[elem.name] > 0) elem.value = params[elem.name];
            if (elem.type == 'checkbox' && params[elem.name]) elem.value = true;
            else if(params[elem.name]) elem.value = params[elem.name];  
        })
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg d-block bg-light sidebar-search mb-lg-0 mb-4 h-100">
    <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#secondNavbar" aria-controls="secondNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-2" id="secondNavbar">
      <ul class="navbar-nav flex-column w-100">
        <div class="row">
            <div class="col-12 mt-3">
                <div class="row g-0">
                    <div class="col-lg-6 col-12">
                        <button class="btn btn-secondary text-white find-btn fw-bold border-0"
                            v-on:click="submit()">
                            Pretraga
                        </button>
                    </div>
                    <div class="col-lg-6 col-12">
                        <button class="btn btn-warning text-secondary find-btn fw-bold border-0"
                            v-on:click="resetForm()">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div v-for="item in formData" class="mt-3 sadrzaj" 
                :class="[item.type == 'text' ? 'col-12' : ! item.label ? 'd-none mt-0' : 'col-lg-6 col-12']"
            >
                <label v-if="item.type == 'checkbox' && item.label" type="checkbox" class="d-flex align-items-end mb-2">
                    <input type="checkbox" :name="item.name" id="" v-model="item.value">
                    <div>{{ item.label }}</div>
                </label>
                <label v-else-if="item.type && !item.label" type="number" class="d-none">
                    <input type="number" :name="item.name" id="" v-model="item.value">
                </label>

                <div v-else>
                    <label  for="objectName" class="form-label mb-0 mt-2 text-dark">{{ item.label }}</label>
                    <input :type="item.type" placeholder="" :name="item.name" id="" v-model="item.value" class="form-control" >
                </div>                
            </div>
        </div>
      </ul>
    </div>
  </nav>
</template>