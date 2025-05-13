<script setup lang="ts">
import type {TFriend} from "@/types/Models.ts";

const props = defineProps<TFriend>()
</script>

<template>
<div class="person">
  <div class="person__name">
    {{ props.name }}
  </div>
  <div class="person__avatar">
    {{ props.avatar }}
  </div>
  {{props.id}}
</div>
</template>

<style scoped>

</style>