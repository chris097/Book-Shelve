import React from "react";
import displayIcon from '../../Icons/display-icon.svg';
import filterIcon from "../../Icons/filter-icon.svg";

export const Category = ({ book }) => {
    return(
        <div className="px-10 bg-gray-50 h-16 py-4 flex md:justify-between fixed w-full mt-20 font-rubik">
            <div className="flex">

                { /* Mobile view : hambuger */}
                <svg className="w-9 md:invisible left-2 absolute text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
        
                <div className="text-lg flex ml-2 md:ml-0 md:mt-0 mt-1">Categories</div>
                <div className="flex ml-32 w-full">
                    <div className="bg-gray-100 px-10 h-9 pt-1.5 rounded-full md:visible invisible text-primaryColor">Fiction</div>
                    <svg className="mx-5 w-5 mt-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="md:mt-2 mt-1.5 absolute md:relative md:left-0 left-40">Showing <span className="font-bold">{book.length} </span>Result(s)</div>
                </div>
            </div>
            <div className="flex">
                <div className="flex bg-white w-28 mr-10 rounded-full px-2 h-9 md:visible invisible">
                    <img className="w-6" src={filterIcon} alt=""/>
                    <span className="ml-2 mt-1.5">Filter</span>
                </div>
                <div className="bg-white py-2.5 px-2 rounded-full h-8 w-8 mt-1 invisible right-4 md:visible">
                    <img src={displayIcon} alt=""/>
                </div>
                { /* mobile */}
                <svg className="absolute right-1 mt-1 text-gray-400 hover:text-gray-600 w-7 md:relative md:invisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </div>
        </div>
    )
}