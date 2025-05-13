<script setup lang="ts">

import Person from "@/components/Person.vue";
import {friends} from "@/dummy/data.ts"
</script>

<template>
<div class="main-layout">
  <div class="container">
    <div class="container__persons-list">
      <div class="persons-list__person" v-for="friend in friends" :key="friend.id">
        <Person
        :id="friend.id"
        :name="friend.name"
        :avatar="friend.avatar"
        />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>