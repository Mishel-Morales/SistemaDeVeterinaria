import { type ReactNode } from "react";

type ModalProps = {
    children: ReactNode,
    state: boolean
};

const Modal = ({ children, state }: ModalProps) => {

    return (
        <section>
            <div className={`${state ? "flex" : "hidden"} inset-0 bg-black/50 z-1 bg-opacity-50 fixed justify-center items-center`}>
                <div className="p-6 bg-gray-100 rounded shadow-lg z-20 max-w-md">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Modal;