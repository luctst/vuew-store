<template>
    <section class="form mt-2 mb-2">
        <div class="row">
            <div class="col-12">
                <from class="form">
                    <div class="form-group">
                        <input type="text" placeholder="Username" class="form-control" v-model="user.username">
                    </div>
                    <div class="form-group">
                        <input type="mail" placeholder="Email" class="form-control" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="sub">Submit</button>
                    </div>
                    <hr>
                    <div class="from-group">
                        <button class="btn btn-secondary" @click="fetchData">Get data</button>
                        <ul class="list-group">
                            <li class="list-item-group" v-for="u in users" :key="u.id">{{ id.username }} - {{ id.email }}</li>
                        </ul>
                    </div>
                </from>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: "",
                email: ""
            },
            users: []
        }
    },
    methods: {
        sub() {
            this.$http.post('https://vue-https-7db1c.firebaseio.com/data.json',this.user).then( response => {
                console.log(response);
            }, error => {
                console.log(error);
            }  );
        },
        fetchData() {
            this.$http.get('https://vue-https-7db1c.firebaseio.com/data.json').then( response => {
                return response.json;
            } ).then( data => {
                const resultArray = [];
                for ( let key in data ) {
                    resultArray.push(data[ key ] );
                }
                this.users = resultArray;
            } );
        }
    }
}
</script>

<style>

</style>
