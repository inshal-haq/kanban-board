import { Dialog } from "@mui/material";

const DialogModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}> = (props) => {
  const { open, onClose, onFormSubmit, children } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-6 p-8 dark:bg-dark-gray"
      >
        {children}
      </form>
    </Dialog>
  );
};

export default DialogModal;
