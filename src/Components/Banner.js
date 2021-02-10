import React from "react";
import img1 from "../Images/img-1.svg";
import img2 from "../Icons/love-icon.svg";
import img3 from "../Icons/comment-icon.svg";
import { Header } from "./Header";


export const Sidebar = () => {
    return(
        <div className="bg-white shadow-lg h-screen w-64 fixed overflow-y-auto mt-36">
            <div className="mt-2 px-10">
                A curated list of every book ever written
            </div>
                <ul className="mt-4 text-gray-300 overflow-visible">
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">AD</span> Adventure</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">RO</span> Romance</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">CO</span> Contemporary</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">MY</span> Mystery</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">HO</span> Horror</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">TH</span> Thriller</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    <li className="py-4 hover:bg-gray-100 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                </ul>
        </div>
    )
}

export const Sketch = () => {
    return(
        <div className="mx-72 mt-44 flex space-x-8 animate-pulse">
                <div className="bg-white shadow-lg w-52 h-72 rounded-lg">
                    <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                    <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                    <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div>
                </div>
                <div className="bg-white shadow-lg w-52 h-72 rounded-lg">
                    <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                    <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                    <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div>
                </div>
                <div className="bg-white shadow-lg w-52 h-72 rounded-lg">
                    <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                    <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                    <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div>
                </div>
                <div className="bg-white shadow-lg w-52 h-72 rounded-lg">
                    <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                    <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                    <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div>
                </div>
            </div>
    )
}

export const MainWrapper = () => {
    return (
        <div className="overflow-y-auto h-screen w-screen overflow-x-hidden">
                <div className="mx-72 mt-44 rounded-full flex flex-wrap w-4/5 justify-items-start">
                    <div className="card">
                        <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                            <img className="w-full h-52" src={img1} alt=""/>
                        </div>
                        <div className="mt-2 ml-3">
                            <div className="text-lg font-medium">The Purple Maze</div>
                            <div className="text-sm text-gray-400">Stuart Matt</div>
                        </div>
                        <div className="flex ml-3 mt-2">
                            <div>
                                <img className="inline" src={img2} alt="like_icon"/>
                                <span className="text-sm text-gray-400 ml-1">24</span>
                            </div>
                            <div className="ml-10">
                                <img className="inline" src={img3} alt="comment_icon"/>
                                <span className="text-sm text-gray-400 ml-1">36</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                            <img className="w-full h-52" src={img1} alt=""/>
                        </div>
                        <div className="mt-2 ml-3">
                            <div className="text-lg font-medium">The Purple Maze</div>
                            <div className="text-sm text-gray-400">Stuart Matt</div>
                        </div>
                        <div className="flex ml-3 mt-2">
                            <div>
                                <img className="inline" src={img2} alt="like_icon"/>
                                <span className="text-sm text-gray-400 ml-1">24</span>
                            </div>
                            <div className="ml-10">
                                <img className="inline" src={img3} alt="comment_icon"/>
                                <span className="text-sm text-gray-400 ml-1">36</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                            <img className="w-full h-52" src={img1} alt=""/>
                        </div>
                        <div className="mt-2 ml-3">
                            <div className="text-lg font-medium">The Purple Maze</div>
                            <div className="text-sm text-gray-400">Stuart Matt</div>
                        </div>
                        <div className="flex ml-3 mt-2">
                            <div>
                                <img className="inline" src={img2} alt="like_icon"/>
                                <span className="text-sm text-gray-400 ml-1">24</span>
                            </div>
                            <div className="ml-10">
                                <img className="inline" src={img3} alt="comment_icon"/>
                                <span className="text-sm text-gray-400 ml-1">36</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                            <img className="w-full h-52" src={img1} alt=""/>
                        </div>
                        <div className="mt-2 ml-3">
                            <div className="text-lg font-medium">The Purple Maze</div>
                            <div className="text-sm text-gray-400">Stuart Matt</div>
                        </div>
                        <div className="flex ml-3 mt-2">
                            <div>
                                <img className="inline" src={img2} alt="like_icon"/>
                                <span className="text-sm text-gray-400 ml-1">24</span>
                            </div>
                            <div className="ml-10">
                                <img className="inline" src={img3} alt="comment_icon"/>
                                <span className="text-sm text-gray-400 ml-1">36</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                            <img className="w-full h-52" src={img1} alt=""/>
                        </div>
                        <div className="mt-2 ml-3">
                            <div className="text-lg font-medium">The Purple Maze</div>
                            <div className="text-sm text-gray-400">Stuart Matt</div>
                        </div>
                        <div className="flex ml-3 mt-2">
                            <div>
                                <img className="inline" src={img2} alt="like_icon"/>
                                <span className="text-sm text-gray-400 ml-1">24</span>
                            </div>
                            <div className="ml-10">
                                <img className="inline" src={img3} alt="comment_icon"/>
                                <span className="text-sm text-gray-400 ml-1">36</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                            <img className="w-full h-52" src={img1} alt=""/>
                        </div>
                        <div className="mt-2 ml-3">
                            <div className="text-lg font-medium">The Purple Maze</div>
                            <div className="text-sm text-gray-400">Stuart Matt</div>
                        </div>
                        <div className="flex ml-3 mt-2">
                            <div>
                                <img className="inline" src={img2} alt="like_icon"/>
                                <span className="text-sm text-gray-400 ml-1">24</span>
                            </div>
                            <div className="ml-10">
                                <img className="inline" src={img3} alt="comment_icon"/>
                                <span className="text-sm text-gray-400 ml-1">36</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export const Banner = () => {
    return(
        <div className="flex">
            <Header />
            <Sidebar />
            <Sketch />
        </div>
    )
}