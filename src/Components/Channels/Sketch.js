import React from "react";



export const Sketch = () => {
    return(
        <>
        <div className="px-10 bg-white shadow-sm flex self-stretch h-20 py-4 fixed w-full animate-pulse">
        <div className="text-2xl pt-2 font-lobster text-gray-400">LiberShelter</div>
                
                <div className="w-4/5 bg-gray-50 mx-20 rounded-full px-4">
                    <span><svg className="w-6 inline text-gray-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                    <input className="w-5/6 bg-transparent outline-none h-full placeholder-gray-200" type="search" name="search" id="search" placeholder="Search books"/>
                </div>
                
                <div className="text-lg bg-gray-50 px-2 rounded-full h-10 mt-1 w-44">
                <div className="bg-white h-4 w-full mt-3 rounded-full"></div>
                </div>
            </div>
            <div className="px-10 bg-gray-50 h-16 py-3 flex justify-between fixed w-full mt-20">
            <div className="flex">
                <div className="text-lg bg-white px-2 rounded-full h-8 w-44">
                <div className="bg-gray-50 h-4 w-full mt-2 rounded-full"></div>
                </div>
                <div className="text-lg bg-white px-2 rounded-full h-8 w-44 ml-24">
                <div className="bg-gray-50 h-4 w-full mt-2 rounded-full"></div>
                </div>
            </div>
            <div className="flex">
                <div className="text-lg bg-white px-2 rounded-full h-8 w-20 mr-4 mt-1">
                <div className="bg-gray-50 h-4 w-full mt-2 rounded-full"></div>
                </div>
                <div className="bg-white py-2 px-2 text-center rounded-full h-8 w-8 mt-1">
                <div className="bg-gray-200 h-4 w-4 rounded-full"></div>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-lg h-screen w-64 fixed overflow-y-auto mt-36 animate-pulse md:visible invisible">
            <div className="mt-2 px-10">
               <div className="pt-4 hover:bg-gray-100"><div className="bg-gray-200 w-5/6 h-4 mt-3 ml-3 rounded-full"></div></div>
               <div className="pt-2 hover:bg-gray-100"><div className="bg-gray-200 w-2/3 h-4 ml-3 rounded-full"></div></div>
            </div>
                <ul className="mt-4 text-gray-300 overflow-visible">
                    <li className="py-4 hover:bg-gray-100 px-10"><div className="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li className="py-4 hover:bg-gray-100 px-10"><div className="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li className="py-4 hover:bg-gray-100 px-10"><div className="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li className="py-4 hover:bg-gray-100 px-10"><div className="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li className="py-4 hover:bg-gray-100 px-10"><div className="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li className="py-4 hover:bg-gray-100 px-10"><div className="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                </ul>
        </div>
    
                
                <div className="mx-72 mt-44 rounded-full flex flex-wrap w-4/5 justify-items-start animate-pulse ">
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
                    <div className="card">
                        <div className="bg-gray-200 w-full h-52 rounded-tr-lg rounded-tl-lg"></div>
                        <div className="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div className="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                </div>

            
           

    </>
    )

}