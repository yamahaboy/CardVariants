import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CommentsProps } from "../../models/CardProps";

type ModalWindowProps = {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  postId: number;
  comments: CommentsProps[];
};

const CardPage: React.FC<ModalWindowProps> = (props) => {
  const { open, onClose, imageSrc, postId, comments } = props;

  const handleClose = () => {
    onClose();
  };

  const postComments = comments.filter((comment) => comment.postId === postId);

  return (
    <Modal open={open}>
      <Box
        sx={{
          margin: "2rem auto",
          width: "70%",
          display: "flex",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <CloseIcon sx={{ fontSize: "40px", color: "#000" }} />
        </IconButton>
        <Box
          sx={{
            dispaly: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            backgroundColor: "#fff",
            border: "none",
          }}
        >
          <Box sx={{ width: "100%", height: "20rem" }}>
            <img
              src={imageSrc}
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              alt="img"
            />
          </Box>
          <Box
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "5px",
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Comments:
            </Typography>
            {postComments.map((comment) => (
              <Typography
                key={comment.id}
                sx={{
                  border: "1px solid #808080",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  padding: "5px",
                }}
              >
                {comment.name}
                {comment.body}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CardPage;
