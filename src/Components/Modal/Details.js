import React from 'react';
import img1  from '../../Images/img-1.svg';
import loveIcon from '../../Icons/love-icon.svg';


export const BookDetails = ({ removeBookDetails, title, author, deleteDetailsModal, editBookDetails}) => {

    return(
        <>
        <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000"></div>
        <div className="self-center justify-center flex font-rubik-400 font-medium">
            <div className="absolute top-1 bg-white shadow-2xl md:w-1/2 mx-2 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md ">
                <div className="flex justify-between xsm:px-3 py-2">
                    <div className="ml-4">{title}</div>
                    <div onClick={removeBookDetails} className=""><svg className="w-5 mr-3 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg></div>
                </div>

                <div className="md:px-6 mt-2 flex px-3">
                    <div className="flex-1 overflow-x-visible h-auto w-32 flex-nowrap">
                        <img className="w-full pr-8 h-70" src={img1} alt="book_image"/>
                        <div className="mt-5">
                            <div className="mb-3">Author: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">{author}</span></div>
                            <div className="mb-3">Published: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">Hannel Ham</span></div>
                            <div className="mb-3">Publishers: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">Hannel Ham</span></div>
                            <div className="mb-3">BookUrl: <span className="bg-blue-400 w-auto text-center text-white pb-1.5 py-1 px-2 rounded-full ml-1.5 text-xs">htpps://www.myapp.com</span></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="font-normal h-72 overflow-y-auto w-full scrollbar scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Facilis explicabo commodi dolores provident numquam error aperiam 
                            laborum aut voluptate, sit maxime cumque earum tenetur autem corporis 
                            sed quia aliquid impedit ipsam. Libero aperiam maiores dolore eum reprehenderit 
                            laborum molestiae, fugit odio error rem, atque, eveniet voluptatibus quo omnis amet soluta!
                        </div>

                        <div className="flex justify-between mt-4">
                            <div><img className="w-6"  src={loveIcon} alt=""/></div>
                            <div className="flex">
                                <svg onClick={editBookDetails} className="w-6 text-gray-300 mr-7 hover:bg-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-5.586z" />
                                </svg>
                                <svg onClick={deleteDetailsModal} className="w-6 text-gray-300 hover:bg-gray-200 shadow-2xl hover:text-red-500 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xsm:px-8 px-3 mt-2">
                    <div>32 comments</div>
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