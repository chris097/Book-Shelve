import React, { useState } from "react";
import { MainWrapper } from "../Channels/MainWrapper";
import { Sidebar } from "../Channels/Sidebar";
import { MobileSidebar } from "../Channels/SidebarMobile";
import { Header } from "../Header/Header";


export const Banner = ({getBookModal, book, getBookId, removeBookId }) => {
    const [ mobSidebar, setMobSidebar ] = useState(false)
    const [showSidebar, setShowSidebar ] = useState(true)

    const getSidebarMobile = () => {
        // console.log('something was clicked...')
        setMobSidebar(!mobSidebar)
        setShowSidebar(!showSidebar)
    }
    
    return(
        <div className="flex overflow-x-hidden">
            <Header getBookModal={getBookModal} book={book} getSidebarMobile={getSidebarMobile} />
            <Sidebar />
            {!showSidebar ? <MobileSidebar /> : showSidebar}
            <MainWrapper book={book} getBookModal={getBookModal} getBookId={getBookId} removeBookId={removeBookId}  />
        </div>
    )
}