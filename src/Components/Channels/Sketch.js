import React from "react";
import displayIcon from '../../Icons/display-icon.svg';
import filterIcon from "../../Icons/filter-icon.svg";


export const Sketch = () => {
    return(
        <>
        <div className="px-10 bg-white shadow-sm flex self-stretch h-20 py-4 fixed w-full">
                <div className="text-2xl pt-2">LiberShelter</div>
                
                <div className="w-4/5 bg-gray-50 mx-20 rounded-full px-4">
                    <span><svg className="w-6 inline text-gray-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                    <input className="w-5/6 bg-transparent outline-none h-full placeholder-gray-200" type="search" name="search" id="search" placeholder="Search books"/>
                </div>
                
                <button className="flex w-40 bg-primaryColor rounded-full outline-none py-3 px-5 hover:bg-blue-400 transition-all ease-in-out">
                <span className="">
                <svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </span>
                <div className="text-white">Add Book</div>
                </button>
            </div>
            <div className="px-10 bg-gray-50 h-16 py-3 flex justify-between fixed w-full mt-20">
            <div className="flex">
                <div className="text-lg">Categories</div>
                <div className="flex ml-32 w-full">
                    <div className="bg-gray-100 px-10 h-9 pt-1 rounded-full text-primaryColor">Fiction</div>
                    <svg className="mx-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="mt-2">Showing - Result(s)</div>
                </div>
            </div>
            <div className="flex">
                <div className="flex bg-white w-28 mr-10 rounded-full px-2 h-9">
                    <img className="w-6" src={filterIcon} alt=""/>
                    <span className="ml-2 mt-1">Filter</span>
                </div>
                <div className="bg-white py-2.5 px-2 rounded-full h-8 w-8 mt-1">
                    <img src={displayIcon} alt=""/>
                </div>
            </div>
        </div>
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
    
                
                <div className="mx-72 mt-44 rounded-full flex flex-wrap w-4/5 justify-items-start animate-pulse space-x-7">
                    <div className="card">
                        <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                        <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                        <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                        <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div className="card">
                        <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                        <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                </div>

            
           

    </>
    )

}