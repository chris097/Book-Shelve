import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from '../../App'

export const WaitPost = () => {
    return(
        <div><i class="fas fa-spinner fa-pulse"></i></div>
    )
}


export const Addbook = ({ removeBookmodal }) => {
    const [postData, setPostData ] = useState({
        title: [],
        author: [],
        bookUrl: [],
        publish: [],
        isPublished: [],
        imageUrl: [],
        description: []
    })
    // Post- add a book to the database
    const onSubmitHandler = e => {
        axios.post(baseUrl, postData)
        .then(res => {
            const updateDate = res.data;
            console.log(updateDate)
                setPostData(postData)
        })

        .catch(err => console.error(`${err.message}`))
    }

    const onChangeHandler = e => {
        const newData = {...postData};
        newData[e.target.id] = e.target.value;
        // console.log(e.target.value)
        setPostData(newData);
    }


    return(
        <>
            <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000"></div>
                <div className="self-center justify-center flex font-rubik">
                    <div className="absolute top-1 bg-white shadow-2xl md:w-96 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md ">
                        <div className="flex justify-between px-3 py-2 bg-gray-50 ">
                            <div className="ml-4">Add a book</div>
                            <div onClick={removeBookmodal} className=""><svg className="w-5 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg></div>
                        </div>
                        <form action="" className="px-7 font-rubik" onSubmit={onSubmitHandler}>
                            <div className="mt-5">
                                <label className="block" htmlFor="title">Title</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.title} className="input-box" type="text" id="title" placeholder="Book title" required/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="author">Author</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.author} className="input-box" type="text" id="author" placeholder="Author name" required/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="BookUrl">Book Url</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.bookUrl} id="bookUrl" className="input-box" type="text" placeholder="https://www.mybook.com" required/>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="publish">Publish</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.publish} id="publish" className="input-box" type="number" placeholder="1995"/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="publishName">Publisher</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.isPublished} id="isPublished" className="input-box" type="text" placeholder="Publisher Name"/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="imageUrl">Image Url</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.imageUrl} id="imageUrl" className="input-box" type="text" placeholder="https://www.mybookimageurl.com"/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="description">Description</label>
                                <textarea onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.description} id="description" className="w-full border border-gray-200 px-1 h-16 outline-none placeholder-gray-200" placeholder="Write a text"></textarea>
                            </div>
                            <button className="w-full bg-primaryColor my-2 rounded-sm p-2 text-white hover:bg-blue-700 transition-all delay-200 ease-in-out" type="submit">Add </button>
                        </form>
                    </div>
                </div>          
        </>
    )
}