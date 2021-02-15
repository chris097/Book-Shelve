import React, { useState } from 'react';

export const EditBook = ({ removeEditBookmodal, onSubmitHandler, book, onEditBook}) => {
    // const [ b, c] = useState({
    //     title: book.title
    // })
    let check;
function toEditBook(){
    book.map(res => (
        check= res
    ))

    return check;
}
let books = toEditBook()
const [ edit, setEdit] = useState({
    title: books.title,
    author: books.author,
    publish: books.publish
})
// console.log(go.title)

    return(
        <>
            <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000"></div>
                <div className="self-center justify-center flex font-rubik">
                    <div className="absolute top-1 bg-white shadow-2xl w-96 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md ">
                        <div className="flex justify-between px-3 py-2 bg-gray-50">
                            <div className="ml-4">Edit book</div>
                            <div onClick={removeEditBookmodal} className=""><svg className="w-5 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg></div>
                        </div>
                        <form action="" className="px-7 font-rubik" onSubmit={onSubmitHandler}>
                            <div className="mt-5">
                                <label className="block" htmlFor="title">Title</label>
                                <input onBlur={(e) => setEdit(e.target.value)}  onChange={(e) => setEdit(e.target.value)} className="input-box" type="text" id="title" value={edit.title}/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="author">Author</label>
                                <input onChange={e => setEdit(e.target.value)} onBlur={e => setEdit(e.target.value)} className="input-box" type="text" id="author" value={edit.author}/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="BookUrl">Book Url</label>
                                <input id="bookUrl" className="input-box" type="text" placeholder="https://www.mybook.com"/>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="publish">Publish</label>
                                <input id="publish" className="input-box" type="number" placeholder="1995"/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="publishName">Publisher</label>
                                <input id="isPublished" className="input-box" type="text" placeholder="Publisher Name"/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="imageUrl">Image Url</label>
                                <input id="imageUrl" className="input-box" type="text" placeholder="https://www.mybookimageurl.com"/>
                            </div>
                            <div className="mt-2">
                                <label className="block" htmlFor="description">Description</label>
                                <textarea id="description" className="w-full border border-gray-200 px-1 h-16 outline-none placeholder-gray-200" placeholder="Write a text"></textarea>
                            </div>
                            <button className="w-full bg-primaryColor my-2 rounded-sm p-2 text-white hover:bg-blue-700 transition-all delay-200 ease-in-out" type="submit">Edit</button>
                        </form>
                    </div>
                </div>          
        </>
    )
}