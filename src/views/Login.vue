<script>
import store from '@/store'
import { login } from '../middleware/routes/user';


export default {
    name: 'Login',
    data(){
        return{
            body:{
                email: '',
                password: ''
            },

            store
        }
    },
    methods: {
        async signUp(){
            try {
                let res = await login(this.body)
                this.store.user = res.data.user
                this.$store.token = res.data.token
                localStorage.setItem("token", res.data.token);
                this.$router.push('/').then(() => { this.$router.go() })
            } catch (error) {
                this.error = error.data.error
            }  
        },        
    },
}
</script>



<template>
    <div class="container">
        <form @submit.prevent="signUp" class="row justify-content-center mt-5">
            <div class="col-lg-4 col-md-6 col-12">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="objectName" class="form-label mb-0 mt-2 text-dark">
                            Email</label><input type="email" required v-model="body.email" name="name" id="email"
                            class="form-control border border-dark">
                    </div>
                    <div class="col-12">
                        <label for="objectName" class="form-label mb-0 mt-2 text-dark">
                            Lozinka</label><input type="password" required v-model="body.password" name="name" id="password"
                            class="form-control border border-dark">
                    </div>
                    <div class="col-12 mt-3 text-center">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>