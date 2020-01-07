import React from "react"; 

const Card = (props) => {
    return (
    <div style={
        {
            padding: "20px",
            marginBottom: "10px",
            textAlign: "center",
            color: "green",
        }
} >
    {props.children}
</div>
    );
}

export default Card;