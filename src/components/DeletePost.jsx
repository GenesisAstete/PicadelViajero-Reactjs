import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import teal from '@material-ui/core/colors/teal';
import { db} from '../firebase'

const DeletePost = (props) => {

    const [postId, setPostId] = React.useState(props.posts)
    const [postData, setPostData] = React.useState(props.dataPost)

    const eliminar = async (id) => {  
        try {
          await db.collection('post').doc(id).delete()
          const arrayFiltrado = postData.filter(item => item.id !== id)
          setPostData(arrayFiltrado)
          setPostId(postId)            
        } catch (error) {
          console.log(error)
        } 
    }
    return (
        <> 
            <IconButton aria-label="delete">
                <DeleteIcon style={{ color: teal[50] }} onClick={() => eliminar(postId)} />
            </IconButton>
        </>
    )
}

export default DeletePost
