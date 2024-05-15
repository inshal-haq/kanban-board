import { Dialog } from "@mui/material";

const DialogModal: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = (props) => {
  const { open, onClose, children } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <div className="flex flex-col gap-6 p-8 dark:bg-dark-gray">
        {children}
      </div>
    </Dialog>
  );
};

export default DialogModal;
