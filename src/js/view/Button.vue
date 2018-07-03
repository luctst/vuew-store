<template>
    <section class="mt-2 mb-2 button">
        <div class="row">
            <div class="col-12">
                <button class="btn btn-info" @click="increment">Increment</button>
                <button class="btn btn-danger" @click="decrement">Decrement</button>
                <hr>
            </div>
        </div>
    </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations( [
            "increment",
            "decrement"
        ] ),
    },
}
</script>

<style>

</style>
