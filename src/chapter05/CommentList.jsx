import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "김길동",
        comment : "commentList.jsx에서 배열을 통해 데이터를 0번 인덱스에 담아서 comments.map을 통해 전송 " ,
    },
    {
        name : "박길동",
        comment : "commentList.jsx에서 배열을 통해 데이터를 1번 인덱스에 담아서 comments.map을 통해 전송 " ,
    },
    {
        name : "고길동",
        comment : "commentList.jsx에서 배열을 통해 데이터를 2번 인덱스에 담아서 comments.map을 통해 전송 " ,

    }
]



function CommentList (props){
    return(
        <div>
            {comments.map((comment)=> {
                return(
                    <Comment name={comment.name} comment = {comment.comment} />
                );
            })}
        </div>
    )
} export default CommentList;