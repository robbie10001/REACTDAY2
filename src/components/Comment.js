import React from "react"; 
import faker from "faker";

function isDirtyWord(input){
    return input.match(/dick/);
}

const Comment = (props) => {
    if (! isDirtyWord(props.text)) {

    
    return (
        <div className = "comment">
                    <a href="/">
                        <img alt="avatar" src={props.avatar} />
                    </a>
                    <div className="comment">
                        <a href="/" className="author">{props.author}</a>
                        <p className="date">{props.date}</p>
                        <p className="text">{props.text}</p>
                    </div>
                </div>
    )
};

return (
    <div>Banned Content!</div>
)
}

export default Comment;