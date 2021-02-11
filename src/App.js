/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Addbook, postData } from './Components/Modal/Addbook';
import { Banner } from './Components/Pages/Banner';
import { Loading } from './Components/Loading';
import { Nodata } from './Components/errors/Nodata';



let baseUrl = "http://localhost:3004/books";

export default function App() {
    const [ getModal, setGetModal ] = useState('');
    const [ web, setWeb ] = useState(<Loading />)
    const [ noData, setNoData ] = useState('')
    const [ newData, setNewData ] = useState(<postData />)

    useEffect(() => {
        // Get all data from database
        axios.get(baseUrl)
        .then(res => {
            const book = res.data;
            // console.log(book);
            if(book){
                setTimeout(() => {
                    setWeb(<Banner getBookModal={getBookModal} book={book} />)
                }, 5000);
            }
            if(book.length === 0){
                setNoData(<Nodata />)
                // console.log('No data found...')
            }       
        })

    },[])

    const onSubmitHandler = async (e) => {
        await axios.post(baseUrl, newData)
        .then(res => {
            const newData = res.data
            setNewData(newData)
            console.log(newData)
        })
    }

    // Onclick to remove addbook modal
    const removeBookmodal = () =>{
        setGetModal('')
    }
    // Onclick to display addboook modal
    const getBookModal = () => {
        setGetModal(<Addbook removeBookmodal={removeBookmodal}onSubmitHandler={onSubmitHandler} setNewData={newData}/>)
    }

    return (
        <div>
            { web  }
            { noData }
            { getModal }
        </div>
    )
}
