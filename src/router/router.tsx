import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CandidatPage from "../pages/CandidatPage";
import ContactsPage from "../pages/ContactsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import VacanciesPage from "../pages/VacanciesPage";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:'/',
          element:<HomePage />
        },
        {
          path:'/candidats',
          element:<CandidatPage />
        },
        {
          path:'/vacancies', 
          element:<VacanciesPage />
        },
        {
          path:'/about',
          element:<AboutPage />
        },
        {
          path:'/contacts',
          element:<ContactsPage />
        }
      ]
    }
  ])