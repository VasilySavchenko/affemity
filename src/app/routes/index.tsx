import React from 'react';
import { useRoutes } from 'react-router-dom';

import MainPage from "@/app/views/MainPage";
import QuestionsPage from "@/app/views/QuestionsPage";
import EmailPage from "@/app/views/EmailPage";
import CraftingPlanPage from "@/app/views/CraftingPlanPage";

interface ComponentRoute {
    path: string;
    element: React.ReactNode;
}

const routes: ComponentRoute[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/questions/:id',
        element: <QuestionsPage />,
    },
    {
        path: '/email',
        element: <EmailPage />,
    },
    {
        path: '/crafting-plan',
        element: <CraftingPlanPage />,
    },
];

export const Routes = () => useRoutes(routes);
