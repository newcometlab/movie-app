import { useNavigate } from 'react-router-dom'
import Button from '../button'

type Props = {
  imageUrl: string
  title: string
  id: number
}

export default function Card(props: Props) {
  const navigate = useNavigate()

  return (
    <div className="bg-primary rounded-lg overflow-hidden border-4 border-transparent hover:border-style-color-cyan">
      <div className="h-full p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center justify-between">
        <div className="w-full">
          <img alt="watchmode" src={props.imageUrl} className="w-full" />
          <div className="w-full text-secondary text-base text-center font-medium mt-5">
            {props.title}
          </div>
        </div>
        <div className="mt-6">
          <Button
            size="md"
            font="bold"
            type="primary"
            onClick={() => {
              navigate(`/detail/${props.id}`)
            }}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  )
}
