import React from "react";
import DesignNavbar from "./design-navbar";
import Editor from "./editor";
import MyEditor from "./editor";

export default function Design(){
    return(
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background: '#F9F9F9',
                fontFamily: 'Uber Move Text',
            }}
        >
           <DesignNavbar/>
            <MyEditor/>
        </div>
    )
}
