import { createBrowserRouter } from "react-router-dom";

import Contact, { loader as contactLoader } from "../pages/contact";
import EditContact, { action as editAction } from "../pages/edit";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "../pages/root";
import ErrorPage from "../pages/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);
