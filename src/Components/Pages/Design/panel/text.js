import React, {useState} from 'react';
import { useEditor } from '@scenify/sdk'

const Text = () => {
    const [value, setValue] = useState('')
    const editor = useEditor()
    // const options = {
    //     type: 'StaticText',
    //     width: 160,
    //     metadata: {
    //         fontWeight: 700,
    //         fontFamily: 'Noto Sans KR',
    //         textAlign: 'center',
    //         fontSize: 28,
    //         text: 'Add heading',
    //     },
    // }

    const addHeading = () => {
        const options = {
            type: 'StaticText',
            width: 800,
            metadata: {
                fontWeight: 700,
                fontFamily: 'Lexend',
                textAlign: 'center',
                fontSize: 80,
                value: 'Add a heading',
            },
        }
        console.log(editor)
        editor.add(options)
    }


    return (
        <div
            style={{
                display: 'flex',
                paddingLeft: '1rem',
                fontSize: '1.66rem',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.045)',
                fontWeight: 700,
                cursor: 'pointer',
            }}
            onClick={addHeading}
        >
            Add a heading
        </div>
    );
};

export default Text;
