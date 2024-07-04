"use client";
import React from "react";
import s from "./page.module.scss";
import InputBox from "./_components/InputBox/InputBox";
import Post from "./_components/Post/Post";
import TemporaryStorageProvider, { TemporaryStorageContext } from "@/app/_context/TemporaryStorageContext";

export default function Home() {
	return (
		<TemporaryStorageProvider>
			<TemporaryStorageContext.Consumer>
				{(context) => (
					<React.Fragment>
						<header className="absolute top-0 left-0 w-full bg-[#2b2b2b] flex items-center justify-center h-[80px]">
							<div className="text-center">
								<h1 className="font-bold text-[1.45rem] leading-[1] text-[#71bb00]">buildbox</h1>
								<span className="text-[0.7rem] leading-3=[1] text-[#6d6d6d]">WEB CHALLENGE</span>
							</div>
						</header>
						<main className={s.main}>
							<div className={s.content}>
								<InputBox />
								<div className="w-full">
									<div className="w-full">
										<span className="text-[#707070] text-[0.8rem]">Feed</span>
									</div>
									<div className="flex flex-col gap-3">
										{context?.data.map((post) => {
											return <Post key={post.id} post={post} />;
										})}
									</div>
								</div>
							</div>
						</main>
					</React.Fragment>
				)}
			</TemporaryStorageContext.Consumer>
		</TemporaryStorageProvider>
	);
}
