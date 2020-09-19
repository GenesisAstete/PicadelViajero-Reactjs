import React from 'react'
/* import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import teal from '@material-ui/core/colors/teal'; */
import { db} from '../firebase'

const EditPost = (props) => {

    const [postId, setPostId] = React.useState(props.postId)
    const [post, setPost] = React.useState(props.post)
 
    const save = () => {
      db.collection("post").doc(postId).update({
        comentario: post
      })
      .then(() => {
        console.log("Edición con éxito!", postId);
        props.ModoEdicion()
        setPostId('') 
      });
    }

    const cancel = () => {
      props.ModoEdicion()
    }
   return (
        <> 
            <textarea name="textpost" value={post} onChange={(e) => setPost(e.target.value)} >{post}</textarea>
            <button onClick={save}>Guardar</button>
            <button onClick={cancel}>Cancelar</button>
        </>
    )
}

export default EditPost
