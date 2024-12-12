"use client"
import Image from "next/image"
import logo from "@/assets/web.png"
import { TagHeader } from "./style"

const Header = () => (
    <TagHeader>
        <Image src={logo} width={103} height={45} alt={"buildbox logo"}/>
    </TagHeader>
)

export default Header