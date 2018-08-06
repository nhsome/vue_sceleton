<template>
  <div class="row">
    <div class="col-md">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    padding: 0 15px;
  }
</style>
