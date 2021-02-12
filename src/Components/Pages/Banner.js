import React from "react";
import { MainWrapper } from "../Channels/MainWrapper";
import { Sidebar } from "../Channels/Sidebar";
import { Header } from "../Header/Header";


export const Banner = ({getBookModal, book, getBookId }) => {
    return(
        <div className="flex">
            <Header getBookModal={getBookModal} book={book} />
            <Sidebar />
            <MainWrapper book={book} getBookModal={getBookModal} getBookId={getBookId} />
        </div>
    )
}