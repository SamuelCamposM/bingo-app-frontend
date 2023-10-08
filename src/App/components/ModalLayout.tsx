import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const ModalLayout = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) => {
  console.log("render");

  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Grid
        container
        sx={{
          minHeight: "50vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { sx: "100%", md: "80%", lg: "60%" },
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
        }}
      >
        <Grid item xs={12} md={4}>
          <Typography>xs=8</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography>xs=4</Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};
