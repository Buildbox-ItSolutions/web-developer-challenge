import headerLogo from '../public/header-logo.svg'

function Header(){
    return(<>
        <div className="bg-[#2b2b2b] heigth-[93px] flex justify-center">
            <img src={headerLogo} alt="buildbox logo" className="my-[24px] w-[103px] h-auto"/>
        </div>
    </>)
}

export default Header;