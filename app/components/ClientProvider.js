'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store'; // Adjust the path as needed

export default function ClientProvider({ children }) {
    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <div className="flex h-dvh w-full items-center justify-center flex-col">
                        <span className="loading loading-dots loading-lg"></span>
                        <p>Refresh if you see this</p>
                    </div>
                }
                persistor={persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    );
}
