import { ReactNode } from 'react'
import Spinner from '../../components/spinner'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import Header from './header'

type Props = {
  children?: ReactNode
}

export default function MainLayout({ children }: Props) {
  const status = useAppSelector((state: RootState) => state.movies.status)

  return (
    <div className="bg-dyf-bg">
      <div className="bg-xlines-size bg-transparent bg-repeat-x bg-xlines-bg">
        <div className="bg-ylines-size bg-transparent bg-repeat-y bg-ylines-bg min-h-screen flex flex-col">
          <Header />

          {status === 'loading' ? (
            <div className="flex-1 flex flex-row justify-center items-center">
              <div className="w-16 h-16">
                <Spinner />
              </div>
            </div>
          ) : status === 'failed' ? (
            <div className="flex-1 flex flex-row justify-center items-center">
              <p className="text-3xl font-medium text-primary">
                Something went wrong. Please reload page.
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-7xl px-4 sm:px-20 pb-2 sm:pb-10 mt-4 sm:mt-6 md:mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
