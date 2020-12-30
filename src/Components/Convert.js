import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({text, lang}) => {
    const [translated,setTranslated] = useState('');
    const [debouncedtext, setDebouncedText] = useState(text);

    useEffect(()=>{
        const timeId = setTimeout( () =>{
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timeId);
        }
    }, [text]);

    useEffect(() => {
        const searchlang = async () =>{
            const response = await axios.post(
                'https://translation.googleapis.com/language/translate/v2', 
                {} , 
                {
                params:{
                    q: debouncedtext,
                    target: lang.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
            }
        );
        
        setTranslated(response.data.data.translations[0].translatedText);
        };
        searchlang();
    }, [lang, debouncedtext])

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Translated Text</label>
                </div>
                <div className="header">{translated}</div>
            </div>
        </div>
    );
};

export default Convert;