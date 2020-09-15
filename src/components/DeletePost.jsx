import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const DeletePost = () => {
    return (
        <>
            <IconButton aria-label="delete">
                <DeleteIcon style={{ color: teal[50] }} />
            </IconButton>
        </>
    )
}

export default DeletePost
