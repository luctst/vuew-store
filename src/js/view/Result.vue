<template>
    <section class="mt-2 mb-2 result">
        <div class="row">
            <div class="col-12">
                <h1>VueX project</h1>
                <p>Result n°1:  {{ clickCounter }}</p>
                <p>Result n°2: {{ clickCounter }}</p>
                <p>You click {{ clickCounter }} times on the button</p>
                <hr>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters( [
        "clickCounter"
        ] ),
    },
}
</script>

<style>

</style>
