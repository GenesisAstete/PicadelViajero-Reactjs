import React from 'react'
import { db} from '../firebase'
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#49BEB7',
  },
}));

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
    const classes = useStyles();
   return (
        <div className="contEdit"> 
            <textarea name="textpost" className="textEdit" value={post} onChange={(e) => setPost(e.target.value)} >{post}</textarea>
            <div className="contBnts">
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<CancelIcon />} 
                onClick={cancel}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={save}
              >
                Guardar
              </Button>

              </div>
        </div>
    )
}

export default EditPost
