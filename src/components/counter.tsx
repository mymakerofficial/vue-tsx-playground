import {computed, defineComponent, ref} from "vue";
import {Button} from "@/components/ui/button";

export default defineComponent({
  name: 'Counter',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(
    { message }: { message: string },
    { slots }: { slots: { header?: (props: { message: string }) => JSX.Element } }
  ) {
    const count = ref(0)

    const double = computed(() => count.value * 2)

    return () => (
      <div class='space-y-2'>
        { slots.header?.({ message: message }) }
        <p>count is: <b>{count.value}</b></p>
        <p>double is: <b>{double.value}</b></p>
        <div class='space-x-2'>
          <Button onClick={() => count.value--}>-</Button>
          <Button onClick={() => count.value++}>+</Button>
        </div>
      </div>
    )
  }
})