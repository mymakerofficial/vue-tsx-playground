<script setup lang="tsx">
import Counter from "@/components/counter.tsx"
import {Header} from "@/components/ui/header";

defineProps<{
  outer: boolean
}>()

// functional components do not retain state
function Part({ message }) {
  return (
    <div class="card">
      <Counter message={message}>
        {{ header: ({message}) => <Header message={message} /> }}
      </Counter>
    </div>
  )
}
</script>

<template>
  <div class="card-outline space-y-4">
    <div class="card-outline">
      <Part v-if="!outer" message="Hello inner!" />
    </div>
    <Part v-if="outer" message="Hello outer!" />
  </div>
</template>

<style scoped>
.card {
  @apply p-4 text-green-500 bg-green-100 rounded-md
}

.card-outline {
  @apply p-4 border-2 border-green-100 rounded-md
}
</style>