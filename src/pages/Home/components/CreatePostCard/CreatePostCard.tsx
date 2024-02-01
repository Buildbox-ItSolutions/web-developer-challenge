import { Image } from 'lucide-react'
import { useCreatePostCard } from '../../hooks/useCreatePostCard'

function CreatePostCard() {
  const {
    userName,
    userPhoto,
    postText,
    canPublish,
    canDiscard,
    fileInputRef,
    handleFileChange,
    setUserName,
    setPostText,
    handleDiscard,
    handleClickOnImage,
    handleSubmit,
  } = useCreatePostCard()

  return (
    <article className="flex w-full flex-col gap-4 rounded-sm border border-greyish-brown-two bg-[#313131] p-6">
      <div className="flex w-full items-center justify-center">
        <button
          onClick={handleClickOnImage}
          className="flex h-[88px] w-[88px] items-center justify-center rounded-[36px] border border-greyish-brown-three"
        >
          {/* TODO: when image is uploaded, show the remove action on hover */}
          {userPhoto ? (
            <img
              src={userPhoto}
              alt="user photo"
              className="h-[88px] w-[88px] rounded-[36px] border border-greyish-brown-three"
            />
          ) : (
            <Image
              width={24}
              className="text-zinc-400"
              strokeWidth={1}
            />
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Seu nome"
          className="w-full rounded-lg bg-greyish-brown px-4 py-3 text-sm capitalize text-white outline-none placeholder:text-warm-grey-three"
        />
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="O que você está pensando?"
          className="h-20 w-full resize-none rounded-lg bg-greyish-brown px-4 py-3 text-sm text-white outline-none placeholder:text-warm-grey-three"
        ></textarea>
      </div>

      <div className="flex w-full items-center justify-end gap-6">
        <button
          onClick={handleDiscard}
          disabled={!canDiscard}
          className="text-sm text-warm-grey-three underline disabled:text-brownish-grey"
        >
          Descartar
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canPublish}
          className="rounded-lg bg-primary px-6 py-3 text-sm text-white transition-colors hover:bg-primary/80 disabled:bg-brownish-grey disabled:text-[#313131]"
        >
          Publicar
        </button>
      </div>
    </article>
  )
}

export { CreatePostCard }
