import React, { useState } from "react";
import img1 from "../../Images/img-1.svg";
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
    const [ editBook, setEditBook ] = useState([])

    function getId (id){
        id = book.map(books => (
            books.id
        ))
    
        return id;
    }
    const id = getId()

    // use remove button x to exit modal
    const removeEditBookmodal = () => {
        setEditBook('')
    }

    // EventHandler- edit book modal
    const editBookDetails =() => {
        setEditBook(<EditBook removeEditBookmodal={removeEditBookmodal} book={book} />)
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
    const removeBookId = async() => {
        console.log('A book was delete ...')
        setDeleteDetails('')
        await axios.delete(`${baseUrl}/${id}`)
        .then(res => console.log(res.data))
    }

    // Cancel Button decided not continue operation
    const cancelDetails = () => {
        console.log('something was clicked...')
        setDeleteDetails('')
    }
 
    // Get:ID look for a particular book in the database
    const getBookId = (id) => {
        axios.get(`${baseUrl}/${id}`)
        .then(res => {
            const result = res.data
            setData(result)
            console.log(result);
    })
        
         return setBookDetails(<BookDetails 
                id={data.id} 
                title={data.title} 
                author={data.author}
                removeBookDetails={removeBookDetails} 
                deleteDetailsModal={deleteDetailsModal}
                editBookDetails={editBookDetails}
            />)
    }

    return (
        <>
            <div className="overflow-y-auto h-screen w-screen overflow-x-hidden font-rubik-400">
            { getBookDetails }
            { deleteDetails }
            { editBook }
                    <div className="mx-72 mt-44 rounded-full flex flex-wrap w-4/5 justify-items-start">
                        { book.map(books => (
                            <div className="card cursor-pointer" key={books.id} onClick={() => getBookId(`${books.id}`)}>
                                <div className="bg-gray-200 w-full rounded-tr-lg rounded-tl-lg">
                                    <img className="w-full h-52" src={img1} alt=""/>
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