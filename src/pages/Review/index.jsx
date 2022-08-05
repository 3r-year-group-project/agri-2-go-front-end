import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

const Review = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
      disabled={isTextareaDisabled}
         color="secondary"
         variant="contained"
         onClick={handleCancel}
         sx={{ width: 200, padding: 1, marginTop: 7 ,fontSize: 20, backgroundColor: "#128C7E"}}
       >
        <b> SUBMIT</b> 
       </Button>
      
      {hasCancelButton && (
         <Button
         color="secondary"
         variant="contained"
         onClick={handleCancel}
         sx={{ width: 200, padding: 1, marginTop: 7 ,fontSize: 20, backgroundColor: "#128C7E"}}
       >
        <b> Cancel</b> 
       </Button>
        
      )}
     
    </form>
  );
};

export default Review;