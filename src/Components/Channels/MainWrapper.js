import React from "react";
import img1 from "../../Images/img-1.svg";
import img2 from "../../Icons/love-icon.svg";
import img3 from "../../Icons/comment-icon.svg";



export const MainWrapper = ({ book }) => {
    return (
        <div className="overflow-y-auto h-screen w-screen overflow-x-hidden">
                <div className="mx-72 mt-44 rounded-full flex flex-wrap w-4/5 justify-items-start">
                    { book.map(books => (
                        <div className="card">
                            <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                                <img className="w-full h-52" src={img1} alt=""/>
                            </div>
                            <div className="mt-2 ml-3">
                                <div className="text-lg font-medium">{books.title}</div>
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
                    ))}
                </div>
            </div>
    )
}