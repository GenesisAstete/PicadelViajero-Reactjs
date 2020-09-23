import React, { useState } from "react";
import { storage } from '../firebase'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

 

const ImageUpload = ({urlPost}) => {
   
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
      } else {
        console.log("error");
        setError("error please upload a image file");
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
            });
        }
        
      );
    } else {
      setError("Error por favor selecciona una foto");
    }
  };
  
  urlPost(url)
  const useStyles = makeStyles(theme => ({
    button: {
      width: "100%",
      backgroundColor: "#E4C01F",
    },
/*     input: {
      //   display: 'none',
      margin: theme.spacing(1)
    } */
  })); 

  const classes = useStyles();
 /* const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }; */
  return (
    <div   >
      <br />
      <div>
        <input type="file" onChange={handleChange} /* className={classes.button} */ />
        <Button
          variant="contained"
          className={classes.button} 
          onClick={handleUpload}
        >
          Confirmar Foto
        </Button>
        <br />
      </div>

      <div >
        <p style={{color:"red"}}>{error}</p>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
      </div>
      {url ? (
        <img src={url} alt="Uploaded images" />
      ) : (
        <></>
      )}
    </div>
    
  );
}
export default ImageUpload