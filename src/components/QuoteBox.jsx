import quotes from '../quotes.json'

import React, {useState} from 'react';

const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);

    const changeNote = () => {
        const randomtwo = Math.floor(Math.random() * quotes.length)
        setIndex(randomtwo);
    };

    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
    ]

    const randomColors = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColors]}`



    return (
        <div className='box' style ={{color: colors[randomColors]}}>
           <div className='containerh1'>
                <i class="fa-solid fa-quote-left"></i>
                <h1>
                    {quotes[index].quote}
                </h1>
            </div>
            <h2>
                {quotes[index].author}
            </h2>
            <button onClick={changeNote}>
                <i className="fa-solid fa-circle-chevron-right" style ={{color: colors[randomColors]}}></i>
            </button>
        </div>
    );
};

export default QuoteBox;