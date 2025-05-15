<script setup lang="ts">

import Person from "@/components/Person.vue";
import {friends, relations} from "@/dummy/data.ts"
import {computed} from "vue";

const getRotation = (index: number, total: number) => {
  const radius = 500;
  const angle = (index / total) * 2 * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  console.log(`for ${index} in ${total} we have angle: ${angle},    x: ${x} and y: ${y}`)
  return {
    left: `calc(50% + ${x.toFixed(2)}px)`,
    top: `calc(50% + ${y.toFixed(2)}px)`,
    transform: "translate(-50%, -50%)",
    position: "absolute"
  }
}

const friendPositions = computed(() => {
  const map = new Map();
  friends.forEach((friend, index) => {
    const angle = (index / friends.length) * 2 * Math.PI;
    const x = 500 * Math.cos(angle);
    const y = 500 * Math.sin(angle);
    map.set(friend.id, { x: 500 + x, y: 500 + y });
  });
  return map;
});

const getFriendPosition = (id: string) => friendPositions.value.get(id);
</script>

<template>
<div class="main-layout">
  <div class="main-layout__container">
    <svg class="relations-lines" xmlns="http://www.w3.org/2000/svg">
      <line
          v-for="(relation, idx) in relations"
          :key="idx"
          :x1="getFriendPosition(relation.from).x"
          :y1="getFriendPosition(relation.from).y"
          :x2="getFriendPosition(relation.to).x"
          :y2="getFriendPosition(relation.to).y"
          stroke="black"
      />
    </svg>
    <div class="main-layout__persons-list">
      <div class="main-layout__person"
           v-for="(friend, index) in friends"
           :key="friend.id"
           >
        <Person
            :id="friend.id"
            :name="friend.name"
            :avatar="friend.avatar"
            :style="getRotation(index, friends.length)"
        />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.main-layout {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-layout__container {
  height: 100%;
  width: 100%;
}

.main-layout__persons-list {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-layout__person {
  position: absolute;
  left: 50%;
}

.relations-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>