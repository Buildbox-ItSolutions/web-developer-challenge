import { XCircle } from 'lucide-react'
import { Post } from '../../../../types'
import { getUserNameInitials } from '../../../../utils/getUserInitials/getUserInitials'
import { useFeedCard } from '../../hooks'

interface Props {
  post: Post
}

function FeedCard({ post }: Props) {
  const { handleDeletePost } = useFeedCard()

  return (
    <article className="flex w-full flex-col gap-1 rounded-sm border border-greyish-brown-two bg-[#313131] md:gap-4">
      <header className="flex w-full items-center justify-end p-3">
        <button
          onClick={() => handleDeletePost(post.id)}
          className="text-brownish-orange"
        >
          <XCircle
            width={20}
            className="bg-transparent"
          />
        </button>
      </header>
      {/* body */}
      <div className="flex h-full gap-4 p-4 pt-0 md:gap-8 md:p-6 md:pb-8 md:pt-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[36px] border border-greyish-brown-three text-zinc-400 md:h-[88px] md:w-[88px]">
          {!post.user.photo ? (
            <h4 className="text-xl">{getUserNameInitials(post.user.name)}</h4>
          ) : (
            <img
              src={post.user.photo}
              alt="user photo"
              className="h-10 w-10 rounded-[36px] border border-greyish-brown-three md:h-[88px] md:w-[88px]"
            />
          )}
        </div>
        <div className="flex w-[348px] flex-col gap-4 md:gap-6">
          <p className="w-full text-warm-grey-three">{post.text}</p>
          <div className="flex flex-col gap-[2px]">
            <em className="text-xs font-medium not-italic text-brownish-grey">Enviado por</em>
            <p className="text-sm capitalize text-warm-grey-two">{post.user.name}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export { FeedCard }
