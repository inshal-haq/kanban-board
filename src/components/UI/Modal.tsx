import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal: React.FC<{ children: React.ReactNode }> = forwardRef(
  (props, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => ({
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      },
    }));

    return (
      <dialog ref={dialog} className="w-[480px] rounded-md p-8">
        <form className="flex flex-col gap-6">{props.children}</form>
      </dialog>
    );
  },
);

export default Modal;
