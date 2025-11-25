import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, Avatar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { uploadAvatarApi } from "~/apis";
import LoadingPage from "~/Components/LoadingPage/LoadingPage";
import { cloneDeep } from "lodash";
import { updateCurrentAccount } from "~/utils/Redux/AccountSlice";
import { useDropzone } from "react-dropzone";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const ChangeAvatar = () => {
  const currAccount = useSelector((state) => state.accountReducer.accountState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    handleFileChange(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  // State cho file 'avatar'
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const handleFileChange = async (e) => {
    setFile(e);
    const formData = new FormData();
    formData.append("image", e);
    setUploading(true);
    uploadAvatarApi(currAccount?._id, currAccount?.public_id, formData)
      .then((res) => {
        const currAccountClone = cloneDeep(currAccount);
        currAccountClone.avatar = res?.data?.avatar;
        currAccountClone.public_id = res?.data?.public_id;
        dispatch(updateCurrentAccount(currAccountClone));
      })
      .catch((error) => {
        console.log("🚀 ~ handleFileChange ~ error:", error);
      })
      .finally(() => {
        setUploading(false);
      });
  };
  if (uploading) {
    return <LoadingPage></LoadingPage>;
  } else {
    return (
      <>
        <Box sx={{ p: 3, maxWidth: "800px", margin: "0 auto" }}>
          {/* Header Buttons */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
            onClick={() => {
              navigate("/boards");
            }}
          >
            <IconButton sx={{ color: "#9fadbc" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              mb: 3,
              color: (theme) =>
                theme.palette.mode === "dark" ? "#b6c2cf" : "black",
            }}
          >
            Change your avatar
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              alignItems: "center",
              mb: "50px",
            }}
          >
            <Avatar
              src={currAccount?.avatar}
              sx={{ m: "0 auto", width: "200px", height: "200px" }}
            ></Avatar>
            <Button
              variant="contained"
              component="label"
              role={undefined}
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{
                width: "50%",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#fff" : "black",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "black" : "#fff",
              }}
              type=""
            >
              Upload
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
            </Button>
          </Box>
          {/* drop zone */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              alignItems: "center",
              border: "1px solid black",
              p: "50px 10px",
            }}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </Box>
        </Box>
      </>
    );
  }
};

export default ChangeAvatar;
