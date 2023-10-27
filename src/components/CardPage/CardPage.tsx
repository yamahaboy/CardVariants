import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

type ModalWindowProps = {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
};
const CardPage: React.FC<ModalWindowProps> = (props) => {
  const { open, onClose, imageSrc } = props;

  const handleClose = () => {
    onClose();
  };

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
          <CloseIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <img src={imageSrc} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Modal>
  );
};

export default CardPage;
