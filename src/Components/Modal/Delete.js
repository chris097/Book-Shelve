import React from 'react';

    export const DeleteDetails = ({ cancelDetails, removeBookId }) => {

    return(
    <>
        <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000"></div>
        <div className="self-center justify-center flex font-rubik-400 font-medium">
            <div className="absolute top-64 bg-white shadow-2xl px-4 md:w-2/5 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md">
                <div className="text-center py-5">
                    <div className="text-xl text-gray-500 mb-4">Are sure you want to delete...</div>
                    <button onClick={cancelDetails} className="text-lg bg-gray-200 text-black  rounded-full w-36 p-2 hover:bg-gray-300 mr-5" type="reset">Cancel</button>
                    <button onClick={removeBookId} className="bg-red-500 p-2 text-lg text-white rounded-full w-36 hover:bg-red-700" type="button">Delete</button>
                </div>
            </div>
        </div>
    </>
    )
}