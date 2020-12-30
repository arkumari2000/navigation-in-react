import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'
import Route from './Route'
import Header from './Header'

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favorite JS library among engineers'
    },
    {
        title: 'How to use React?',
        content: 'Use React by creating components'
    },
]

const colors = [
    {
        label: 'The primary color Red',
        value: 'red'
    },
    {
        label: 'It is sky color Blue',
        value: 'blue'
    },
    {
        label: 'Let us play with parrot color Green',
        value: 'green'
    }
]

const App = () =>{
    const [selected, setSelected] = useState(colors[0]);
    return(
        <div style={{padding: '10px'}}>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={colors}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
}

export default App;