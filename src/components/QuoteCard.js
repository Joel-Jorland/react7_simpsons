import React from 'react';

function QuoteCard ({quote}) {
    return(
        <div>
            <h1>{quote.character}</h1>
            <img src={quote.image} alt={quote.character} />
            <p>{quote.quote}</p>
        </div>
    )
}

export default QuoteCard;