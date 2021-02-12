import React, { useState } from "react";
import { Sketch } from "./Channels/Sketch";

export const Lib = () => {
    return(
        <div className="animate-ping text-center mt-64">
           <div className="text-3xl font-bold">LiberShelter</div>
        </div>
    )
}

export const Load = () => {
    return(
        <div className="text-center">
            Loading ...
        </div>
    )
}

export const Loading = () => {
    const [ loading, setLoading ] = useState(<Sketch />)

    setTimeout(() => {
        setLoading(<Sketch />)
    }, 2500);

    return(
        <div className="overflow-x-hidden h-screen">
            { loading }
        </div>
    )
}