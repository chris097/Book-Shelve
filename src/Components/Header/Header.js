import React from "react";
import { Category } from "../Channels/Category";

export const Header = ({ getBookModal, book }) => {
    return(
        <>
            <div className="md:px-10 px-4 bg-white shadow-sm flex h-20 py-4 fixed w-full">
                <div className="text-2xl pt-2 font-lobster">LiberShelter</div>
                
                <div className="md:w-2/3 md:bg-gray-50 mx-20 rounded-full px-4 ">
                    <span><svg className="md:w-6 w-9 md:ml-0 md:mt-0 ml-4 mt-1 inline text-gray-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                    <input className="w-5/6 bg-transparent outline-none h-full md:visible invisible placeholder-gray-200" type="search" name="search" id="search" placeholder="Search books"/>
                </div>
                
                <button onClick={getBookModal} className="absolute right-8 flex w-40 invisible md:visible bg-primaryColor rounded-full outline-none py-3 px-5 hover:bg-blue-400 transition-all ease-in-out">
                <span className="">
                <svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </span>
                <div className="text-white font-rubik">Add Book</div>
                </button>

                <button onClick={getBookModal} className="flex absolute md:right-8 right-4 w-auto md:invisible bg-primaryColor rounded outline-none py-2 px-3 hover:bg-blue-400 transition-all ease-in-out">
                <span className="">
                <svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </span>
                <div className="text-white font-rubik"></div>
                </button>
               
            </div>
            <Category book={book} />
        </>
    )
}