import React from 'react';
// import img1  from '../../Images/img-1.svg';
import img2 from "../../Icons/love-icon.svg";
import loveIcon from '../../Icons/love-icon.svg';


export const BookDetails = ({ 
    removeBookDetails, 
    title,
    author,
    description, 
    isPublished,
    bookUrl,
    imageUrl
}) => {


    return(
        <>
        <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000"></div>
        <div className="self-center justify-center flex font-rubik-400 font-medium">
            <div className="absolute top-5 pb-3 bg-white shadow-2xl md:w-1/2 w-5/6 mx-2 h-auto z-50 transition-transform overflow-hidden rounded-md ">
                <div className="flex justify-between md:px-3 py-2">
                    <div className="ml-4">{title}</div>
                    <div onClick={removeBookDetails} className=""><svg className="w-5 mr-3 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg></div>
                </div>

                <div className="md:px-6 mt-2 flex px-3">
                    <div className="overflow-x-visible w-1/2">
                        <img className="w-screen bg-no-repeat bg-cover h-48" src={imageUrl !== ""||[] ? imageUrl : img2} alt="book_image"/>
                        <div className="mt-5 w-32 md:w-auto overflow-x-auto">
                            <div className="mb-3 whitespace-nowrap">Author: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">{author}</span></div>
                            <div className="mb-3">Published: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">{isPublished}</span></div>
                            <div className="mb-3 whitespace-nowrap">Publishers: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">{author}</span></div>
                            <div className="mb-3 whitespace-nowrap">BookUrl: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs"><a href={bookUrl}>{bookUrl}</a></span></div>
                        </div>
                    </div>
                    <div className="ml-5 w-full break-all h-60 md:h-auto scrollbar scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 overflow-auto">
                        { description }
                    </div>
                </div>

                <div className="md:px-8 px-3 mt-2">
                    <div className="flex">
                    <div>32 comments</div>
                    <div><img className="w-6 ml-14"  src={loveIcon} alt=""/></div>
                    </div>
                    <div className="flex my-3">
                        <svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <input className="w-full border-gray-200 border ml-1.5" type="text" name="comment" id="comment" placeholder="Write a comment"/>
                    </div>
                    <div className="flex">
                    <svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="w-full border border-gray-200 h-10 ml-1.5"></div>
                    </div>
                    <div className="ml-8 text-sm">
                        <button>Edit</button>
                        <button className="ml-5">Delete</button>
                    </div>
                </div>

            </div>
        </div>
      
        </>
    )
}