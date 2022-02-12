import React from 'react';
import Editor from '@scenify/sdk'
import Text from "./panel/text";
import { EditorProvider } from '@scenify/sdk'

const editorConfig = {
    clipToFrame: true,
    scrollLimit: 0,
}

export default function MyEditor(){

    return (
        <div style={{ display: 'flex', flex: 1 }}>
            {/*<Panels />*/}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <Text />
                <div style={{ flex: 1, display: 'flex', padding: '1px' }}>
                    <Editor config={editorConfig} />
                </div>
                {/*<Footer />*/}
            </div>
        </div>
    );
};

