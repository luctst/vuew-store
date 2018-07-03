<template>
  <main class="container">
    <app-result></app-result>
    <app-button></app-button>
    <app-form></app-form>
  </main>
</template>

<script>
import Result from "./view/Result";
import Button from "./view/Button";
import Form from "./view/Form";

export default {
  components: {
    "app-result": Result,
    "app-button": Button,
    "app-form": Form
  }
}
</script>

<style>

</style>
