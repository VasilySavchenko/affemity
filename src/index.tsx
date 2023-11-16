import { HashRouter }  from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import { ModalProvider } from "@/app/context/loader";

import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <ModalProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </ModalProvider>
    </>
);
