<template>
  <div class="card">
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-block">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  export default {}
</script>
<style>
</style>
