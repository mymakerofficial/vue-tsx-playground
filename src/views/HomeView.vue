<script setup lang="ts">
import InnerOuter from "@/components/InnerOuter.vue";
import {Header} from "@/components/ui/header";
import {Button} from "@/components/ui/button";
import {useState} from "@/composables/useState.ts";

const [outer, setOuter] = useState(false);
</script>

<template>
  <main>
    <section class="m-12 space-y-2">
      <Header>vue-tsx-playground</Header>
      <Button @click="setOuter(!outer())">Toggle Outer ({{ outer() }})</Button>
    </section>
    <section class="m-12 w-1/4">
      <InnerOuter :outer="outer()" />
    </section>
  </main>
</template>
