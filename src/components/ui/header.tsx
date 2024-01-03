export function Header(
  { message }: { message: string },
  { slots }: { slots: { default?: () => JSX.Element } }
) {
  return <h1 class='text-2xl font-bold my-2'>{ slots.default?.() || message }</h1>
}