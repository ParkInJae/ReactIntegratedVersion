import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name = "처음만난 파이썬" numOfPage={300}/>
            <Book name = "처음만난 자료구조" numOfPage={500}/>
            <Book name = "처음만난 리엑트" numOfPage={200}/>
        </div>
    )
}
export default Library;