import React, { useState } from "react";
import { MainWrapper } from "../Channels/MainWrapper";
import { Sidebar } from "../Channels/Sidebar";
import { MobileSidebar } from "../Channels/SidebarMobile";
import { Header } from "../Header/Header";


export const Banner = ({getBookModal, book, getBookId, removeBookId }) => {
    const [ mobSidebar, setMobSidebar ] = useState([])
    const getSidebarMobile = () => {
        console.log('something was clicked...')
        setMobSidebar(<MobileSidebar />)
    }
    return(
        <div className="flex overflow-x-hidden">
            <Header getBookModal={getBookModal} book={book} getSidebarMobile={getSidebarMobile} />
            <Sidebar />
            {mobSidebar}
            <MainWrapper book={book} getBookModal={getBookModal} getBookId={getBookId} removeBookId={removeBookId}  />
        </div>
    )
}