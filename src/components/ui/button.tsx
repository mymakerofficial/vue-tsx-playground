export function Button(
  { onClick }: { onClick: () => void },
  { slots }: { slots: { default?: () => JSX.Element } }
) {
  return <button onClick={onClick} class='inline-flex items-center justify-center whitespace-nowrap h-9 rounded-md px-3 text-sm font-medium bg-neutral-900 text-neutral-100 hover:bg-neutral-800/90'>{ slots.default?.() }</button>
}