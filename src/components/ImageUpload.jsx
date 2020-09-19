import React, { useState } from "react";
import { storage } from '../firebase'
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
/* import Button from "@material-ui/core/Button"; */

const ImageUpload = ({urlPost }) => {
   
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleChange = e => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(e.target.files[0]));
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
        
      } else {
        console.log("error");
        setError("elije una imagen para cargar");
      }
    
    }
  };
 
  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
       
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
     
          console.log(error);
          setError(error);
        },
        () => {
        
          storage
            .ref("images")
            .child(image.name) 
            .getDownloadURL() 
            .then(url => {
              console.log(url);
              setUrl(url);
              setProgress(0);
              setPreview(null)
            });
        }
        
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };
  
  urlPost(url)

/*   const classes = useStyles();
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }; */

   const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    }, 
  })); 
  /* const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      //   display: 'none',
      margin: theme.spacing(1)
    }
  })); */
   const classes = useStyles(); 
  return (
    <div /* className={classes.root} */style={{ display: "flex" }}>
   {/*    <br /> */}
      {/*         <input type="file" onChange={handleChange} className={classes.button} />
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleUpload}
        >
          Upload
        </Button>
        <br /> */}
      <div className={classes.root}>
      <input type="file" onChange={handleChange}  id="icon-button-file" className={classes.input}   accept="image/*"  />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span" >
            <PhotoCamera   />
          </IconButton>
        </label>
      </div>

      <div style={{ height: "100px" }}>
        <p style={{color:"red"}}>{error}</p>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        {preview ? (
        <img src={preview} alt="Uploaded images" width="50%" />
      ) : (
        <></>
      )}
      </div>
      
    </div>
    
  );
}
export default ImageUpload