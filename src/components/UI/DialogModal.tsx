import { Dialog } from "@mui/material";

const DialogModal: React.FC<{
  open: boolean;
  setOpen: (state: boolean) => void;
  children: React.ReactNode;
}> = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth maxWidth="xs">
      <div className="flex flex-col gap-6 p-8">{props.children}</div>
    </Dialog>
  );
};

export default DialogModal;
