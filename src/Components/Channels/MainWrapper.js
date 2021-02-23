import React, { useState } from "react";
import img2 from "../../Icons/love-icon.svg";
import img3 from "../../Icons/comment-icon.svg";
import { BookDetails } from "../Modal/Details";
import axios from "axios";
import { baseUrl } from "../../App";
import { DeleteDetails } from "../Modal/Delete";
import { EditBook } from "../Modal/Edit";


export const MainWrapper = ({ book }) => {
    const [ getBookDetails, setBookDetails ] = useState([])
    const [ data, setData ] = useState([]);
    const [ deleteDetails, setDeleteDetails ] = useState([])
    const [ editForm, setEditForm ] = useState([])

    // use remove button x to exit modal
    const removeEditBookmodal = () => {
        setEditForm('')
    }

    // EventHandler- edit book modal
    const editBookDetails =() => {
        setEditForm(<EditBook removeEditBookmodal={removeEditBookmodal} book={book} />)
        setDeleteDetails('')
        setBookDetails('')

    }

    // Remove book details modal
    function removeBookDetails() {
        setBookDetails('');
    }

    const deleteDetailsModal = (e) => {
        setDeleteDetails(<DeleteDetails cancelDetails={cancelDetails} removeBookId={removeBookId} />)
        setBookDetails('')
    }
    // Delete- To delete a book from the database
    const removeBookId = () => (
        console.log('something was click')
    )


    // Cancel Button decided not continue operation
    const cancelDetails = () => {
        console.log('something was clicked...')
        setDeleteDetails('')
    }
 
    // Get:ID look for a particular book in the database
    const getBookId = (_id) => {
        axios.get(`${baseUrl}/${_id}`)
        .then(res => {
            const result = res.data
            setData(result)
            console.log(result);
    })
        
         setBookDetails(
             <BookDetails 
                id={data.id} 
                title={data.title} 
                author={data.author}
                removeBookDetails={removeBookDetails} 
                deleteDetailsModal={deleteDetailsModal}
                editBookDetails={editBookDetails}/>
            )
    }

    return (
        <>
            <div className="pb-20 overflow-y- h-screen w-screen overflow-x-hidden font-rubik-400 self-center justify-items-center justify-center scrollbar-track-gray-200 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600">
            { getBookDetails }
            { deleteDetails }
            { editForm }
                    <div className="md:mx-72 mt-44 rounded-full md:flex md:flex-wrap w-full self-center justify-items-start md:relative">
                        { book.map(books => (
                            <div className="card cursor-pointer" key={books._id} onClick={() => getBookId(`${books._id}`)}>
                                <div className="bg-gray-200 md:w-full rounded-tr-lg rounded-tl-lg">
                                    <img className="w-screen h-52" src={books.imageUrl="" ? img2 : books.imageUrl} alt=""/>
                                </div>
                                <div className="mt-2 ml-3">
                                    <div className="text-lg font-medium">{books.title}</div>
                                    <div className="text-sm text-gray-400">{books.author}</div>
                                </div>
                                <div className="flex ml-3 mt-2">
                                    <div>
                                        <img className="inline" src={img2} alt="like_icon"/>
                                        <span className="text-sm text-gray-400 ml-1">24</span>
                                    </div>
                                    <div className="ml-10">
                                        <img className="inline" src={img3} alt="comment_icon"/>
                                        <span className="text-sm text-gray-400 ml-1">36</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
    )
}