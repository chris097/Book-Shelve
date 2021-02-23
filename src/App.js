/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Addbook } from './Components/Modal/Addbook';
import { Banner } from './Components/Pages/Banner';
import { Loading } from './Components/Loading';
import { Nodata } from './Components/errors/Nodata';


export let baseUrl = "https://lib-shelter.herokuapp.com/api/items";

export default function App() {
    const [ getModal, setGetModal ] = useState('');
    const [ web, setWeb ] = useState(<Loading />)
    const [ noData, setNoData ] = useState('');

    useEffect(() => {
        // Get all data from database
        axios.get(baseUrl)
        .then(res => {
            const book = res.data;
            // console.log(book);
            if(book){
                setTimeout(() => {
                    setWeb(<Banner getBookModal={getBookModal} book={book} />)
                }, 1000);
            }
            if(book.length === 0){
                setNoData(<Nodata />)
                // console.log('No data found...')
            }       
        })
        .catch(err => console.error(`${err.message}`))

        return setWeb;

    },[])


    // Onclick to remove addbook modal
    const removeBookmodal = () =>{
        setGetModal('')
    }
    // Onclick to display addboook modal
    const getBookModal = () => {
        setGetModal(<Addbook removeBookmodal={removeBookmodal} />)
    }

    return (
        <div>
            { web }
            { noData }
            { getModal }
        </div>
    )
}
