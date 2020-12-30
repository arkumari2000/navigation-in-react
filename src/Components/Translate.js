import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const languages = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () =>{
    const [lang, setLang] = useState(languages[0])
    const [text,setText] = useState('');
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
        <br/>
            <Dropdown 
                label = "Select a language"
                options={languages}
                selected={lang}
                onSelectedChange = {setLang}
            />
        <br/>
            <Convert
                text={text}
                lang={lang}    
            />
        </div>
    );
};

export default Translate
