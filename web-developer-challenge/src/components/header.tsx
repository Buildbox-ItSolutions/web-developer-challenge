import bxLogo from '../assets/bx-logo.png'

export function Header (){
  return (
    <div className="w-full bg-[#2b2b2b] h-24  flex items-center justify-center">
      <img src={bxLogo} className='pt-6 pb-6' />
    </div>
  )
}