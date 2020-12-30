import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTem] = useState('React');
    const [results, setResults] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() =>{
        const timeoutId = setTimeout(() =>{
            setDebouncedTerm(term);
        },1000)

        return () =>{
            clearTimeout(timeoutId);
        }

    },[term])

    useEffect(()=>{
        const search = async () =>{
            const response = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(response.data.query.search);
        };
        search();
    }, [debouncedTerm]);

    const searchList = results.map(result => {
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input 
                        value={term}
                        onChange={e=>setTem(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {searchList}
            </div>
        </div>
    );

}

export default Search;