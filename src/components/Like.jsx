import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import firebase from 'firebase';

const Like = (props) => {

    const [post, setPost] = React.useState(props.posts)
    const [postId, setPostId] = React.useState(props.postId)
    const [like, setLike] = React.useState()

    const likes = () => {
        const usuario = firebase.auth().currentUser;
        const userId = usuario.uid;
          firebase.firestore().collection('post').doc(postId).get()
          .then(() => { 
            const docLikes = post.likes;
            const includesUser = docLikes.includes(userId);
            setLike(docLikes)
            console.log('doclike',like)
            if (includesUser === true) {
              firebase.firestore().collection('post').doc(postId).update({
                likes: firebase.firestore.FieldValue.arrayRemove(userId),
              });
              console.log("LIKE SACADO");

            } else if (includesUser === false) {
              firebase.firestore().collection('post').doc(postId).update({
                likes: firebase.firestore.FieldValue.arrayUnion(userId),
              });

            }

          }); 
       
     } 
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <ThumbUpAltIcon onClick={likes}/>
            <p>{props.like.length}</p>
        </div>
    )
}

export default Like
