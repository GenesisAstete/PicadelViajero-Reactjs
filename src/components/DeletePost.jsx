import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import teal from '@material-ui/core/colors/teal';
import { db} from '../firebase'
/* import Swal from 'sweetalert2' */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const DeletePost = (props) => {

    const [postId, setPostId] = React.useState(props.posts)
    const [postData, setPostData] = React.useState(props.dataPost)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                <DeleteIcon style={{ color: teal[50] }} onClick={handleClickOpen} />
            </IconButton>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"¿Eliminar Publicación?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Puedes editarla si solo necesitas cambiar algo.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button  onClick={() => eliminar(postId)} color="primary" autoFocus>
                        Eliminar
                    </Button>
                    </DialogActions>
                </Dialog>
    
        </>
    )
}

export default DeletePost
