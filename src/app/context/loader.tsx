import React, { createContext, useContext, ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';

import "./index.scss"

interface ModalContextProps {
    openModal: (modalComponent: ReactNode) => void;
    closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | null>(null);

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [modalComponent, setModalComponent] = useState<ReactNode | null>(null);
    const modalRoot = document.getElementById('modal') as HTMLElement;

    const openModal = (component: ReactNode) => {
        setModalComponent(component);
    };

    const closeModal = () => {
        setModalComponent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal ,closeModal}}>
            {children}
            {modalComponent &&
                ReactDOM.createPortal(
                    <div className="modal-container">
                        {modalComponent}
                    </div>,
                    modalRoot
                )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }

    return {openModal: context.openModal, closeModal: context.closeModal};
};
