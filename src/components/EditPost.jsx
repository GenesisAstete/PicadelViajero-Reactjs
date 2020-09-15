import React from 'react'
/* import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import teal from '@material-ui/core/colors/teal'; */
import { db} from '../firebase'

const EditPost = (props) => {

    const [postId, setPostId] = React.useState(props.posts)
    const [postData, setPostData] = React.useState(props.dataPost)
    const [tarea, setTarea] = React.useState()

    const guardar = async () => {
      console.log('id guardar')
/*         try {
          await db.collection('post').doc(id).update({
            comentario: tarea
          })
          const arrayEditado = postData.map(item => (
            item.id === id ? {id: item.id, comentario: tarea} : item
          ))
          setPostData(arrayEditado)
          setPostId(postId)     
           setId('')
           setTarea('')  
        } catch (error) {
          console.log(error)
        } */
        /* setPostId(id) */
    }

    return (
        <> 
        <textarea>holanda</textarea>
{/*             <input 
            type="text" 
            className="form-control mb-2"
            placeholder='Ingrese Tarea'
            value={tarea}
            onChange={e => setPostId(e.target.value)}
            />  */}
            <button onClick={guardar(postId)}>Guardar</button>
        </>
    )
}

export default EditPost
