import React from "react";
import displayIcon from '../../Icons/display-icon.svg';
import filterIcon from "../../Icons/filter-icon.svg";

export const Category = ({ book }) => {
    return(
        <div className="px-10 bg-gray-50 h-16 py-4 flex justify-between fixed w-full mt-20 font-rubik">
            <div className="flex">
                <div className="text-lg flex">Categories</div>
                <div className="flex ml-32 w-full">
                    <div className="bg-gray-100 px-10 h-9 pt-1.5 rounded-full text-primaryColor">Fiction</div>
                    <svg className="mx-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="mt-2">Showing <span className="font-bold">{book.length} </span>Result(s)</div>
                </div>
            </div>
            <div className="flex">
                <div className="flex bg-white w-28 mr-10 rounded-full px-2 h-9">
                    <img className="w-6" src={filterIcon} alt=""/>
                    <span className="ml-2 mt-1.5">Filter</span>
                </div>
                <div className="bg-white py-2.5 px-2 rounded-full h-8 w-8 mt-1">
                    <img src={displayIcon} alt=""/>
                </div>
            </div>
        </div>
    )
}