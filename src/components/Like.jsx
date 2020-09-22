import React from 'react'
import GradeIcon from '@material-ui/icons/Grade';
import firebase from 'firebase';

const Like = (props) => {

    const [like, setLike] = React.useState([props.like.length]) 
    const [uid, setUid] = React.useState(props.user)
    const [post, setPost] = React.useState(props.posts)
    const [postId, setPostID] = React.useState(props.postId)
    const [count, setCount] = React.useState(0)
    const [user, setUser] = React.useState(false)

    const likes = () => {
        if(post.id === postId && post.uid === uid){
            firebase.firestore().collection('post').doc(postId).update({
                likes: firebase.firestore.FieldValue.arrayUnion(uid) })
        
        }else{
            const LikeSelected = post.find(element => element.id === post.id);
            firebase.firestore().collection('post').doc(`${postId}`).update({
                likes: firebase.firestore.FieldValue.arrayRemove(uid),
              });
              setUid("")
              setPostID("")
        }
        
  /*       const postSelect =  post.find(element => element.id === post.id);
        postSelect.count = postSelect.count + 1
        setLike({...postSelect, like: postSelect.count}) */
/*         const array = props.resumen
        const itemSelected = array.find(element => element.idProducto === item.idProducto);
        itemSelected.countProducto = itemSelected.countProducto + 1;
        setResult({ ...array, countProducto : itemSelected.countProducto}) */
     } 
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <GradeIcon onClick={likes}/>
            <p>{props.like.length}</p>
        </div>
    )
}

export default Like
