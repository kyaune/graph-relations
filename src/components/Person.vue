<script setup lang="ts">
import type {TFriend} from "@/types/Models.ts";

const props = defineProps<TFriend>()
</script>

<template>
<div class="person">
  <img class="person__avatar"
       :src="props.avatar"
       alt=""
  />
  <div class="person__name">
    {{ props.name }}
  </div>
  {{props.id}}
</div>
</template>

<style scoped>

</style>