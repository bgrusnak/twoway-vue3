# twoway-vue3
The simple package for the two way binding of properties for the Vue3

## Example
```
<template>
  <div>
    <input
      v-model="text.value"
    />
  </div>
</template>
<script setup>
  import twoway from '@bgrusnak/twoway-vue3'
  const text = twoway('');
</script>
```