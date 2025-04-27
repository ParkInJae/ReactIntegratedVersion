import React from "react";
// 댓글모양의 css 추가 

const styles = {
wrapper: {
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection: "row",
        border : "1px solid grey",
        borderRadius : 16,
    },
imageContainer : {},
image : {
        width : 50,
        height : 50,
        borderRadius : 25,
    },
contentContainer : {
    marginLeft : 8,
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
},
nameText : {
    color : "black",
    fontSize : 16,
    fontWeight : "bold",
},
commentText : {
    color : "black",
    fontSize : 16,
},
};

function Comment (props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="data:image/jpeg;base64,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"
                style={styles.image}/>
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>  {/* 동적으로 할당  */}
                <span style={styles.commentText}>{props.comment}</span> {/* 동적으로 할당  */}
            </div>
        </div>
    )
}export default Comment ;
