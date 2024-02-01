import BXLogo from '../../assets/bx-logo@3x.png'
import { CreatePostCard, FeedCard } from './components'
import { useHome } from './hooks'

function Home() {
  const { posts } = useHome()

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <header className="flex w-full flex-1 items-center justify-center bg-black-two py-6">
        <img
          src={BXLogo}
          alt="bx logo"
          className="h-[45px] w-[103px]"
        />
      </header>

      <main className="flex w-full flex-col items-center justify-center gap-14 px-4 py-10 md:w-[516px] md:px-0">
        <CreatePostCard />

        <div className="flex w-full flex-col gap-2">
          <div className="w-full items-center justify-start">
            <b className="text-sm font-medium text-warm-grey-two">Feed</b>
          </div>
          <div className="flex flex-col gap-4">
            {!posts.length && (
              <div className="flex w-full items-center justify-center">
                <p className="text-brownish-grey">Seja a primeira pessoa a publicar um post!</p>
              </div>
            )}

            {posts.map((post, index) => (
              <FeedCard
                key={index}
                post={post}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export { Home }
