import { Box, Modal } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalWatchVideo = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p>
            <a href="https://trello.com/vi?wvideo=ogwb75fphf#video">
              <img
                src="https://embed-ssl.wistia.com/deliveries/9252a5d2815dafa102678ef472efaaa9a7eae09c.jpg?image_play_button_size=2x&image_crop_resized=960x540&image_play_button_rounded=1&image_play_button_color=2949E5e0"
                width="400"
                height="225"
                style={{ width: "400px", height: "225px" }}
              />
            </a>
          </p>
          <p>
            <a href="https://trello.com/vi?wvideo=ogwb75fphf#video">
              Ghi lại, sắp xếp và giải quyết việc cần làm từ bất cứ đâu | Trello
            </a>
          </p>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWatchVideo;
