import { ReactNode } from 'react'

type Props = {
  value: number | string
  items: {
    value: number | string
    title: ReactNode
  }[]
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}
export default function Select(props: Props) {
  return (
    <select
      className="bg-secondary border border-style-color-cyan text-primary text-sm rounded-lg block w-full p-2"
      value={props.value}
      onChange={props.onChange}
    >
      {props.items.map((item, idx) => {
        return (
          <option key={idx} value={item.value}>
            {item.title}
          </option>
        )
      })}
    </select>
  )
}
