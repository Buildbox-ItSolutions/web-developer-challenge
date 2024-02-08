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
    <article className='flex w-full flex-col rounded-sm border border-gray-300 dark:border-greyish-brown-two dark:bg-[#313131]'>
      <header className='flex w-full items-center justify-end p-3'>
        <button
          onClick={() => handleDeletePost(post.id)}
          className='text-brownish-orange transition-colors hover:text-brownish-orange/70'
          title='Apagar post'>
          <XCircle width={20} className='bg-transparent' />
        </button>
      </header>
      {/* body */}
      <div className='flex h-full flex-col gap-4 p-4 pt-0 md:flex-row md:gap-8 md:p-6 md:pb-8 md:pt-3'>
        <div className='flex h-14 w-full items-center justify-center rounded-[36px] border-gray-300 text-black-two dark:border-greyish-brown-three dark:text-zinc-400 md:h-[88px] md:w-[88px] md:border'>
          {!post.user.photo ? (
            <h4 className='flex h-14 w-14 items-center justify-center rounded-[36px] border text-xl md:h-auto md:w-auto md:rounded-none md:border-none'>
              {getUserNameInitials(post.user.name)}
            </h4>
          ) : (
            <img
              src={post.user.photo}
              alt='user photo'
              className='h-14 w-14 rounded-[36px] md:h-[88px] md:w-[88px]'
            />
          )}
        </div>
        <div className='flex w-[348px] flex-col gap-4 md:gap-6'>
          <p
            role='postText'
            className='w-full text-black-two dark:text-warm-grey-three'>
            {post.text}
          </p>
          <div className='flex flex-col gap-[2px]'>
            <em className='text-xs font-medium not-italic text-warm-grey-three dark:text-brownish-grey'>
              Enviado por
            </em>
            <label className='text-sm capitalize text-warm-grey-two'>
              {post.user.name}
            </label>
          </div>
        </div>
      </div>
    </article>
  )
}

export { FeedCard }
