import React from "react";
import Comment from "./Comment";
import faker from "faker";
import Card from "./Card";

const App = () => {
    return (
        <>
            <div className="comments">
                <Card>
                    <Comment 
                        author="Oscar Wilde"
                        date="12/12"
                        text="Hey Buddy"
                        avatar={faker.image.avatar()} 
                     />
                </Card>
            </div>
        </>
    );
}


export default App;