import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/Single/AppDetails';
import Error from '../pages/404/Error';
import InstalledApps from '../pages/InstalledApps/InstalledApps';

const appsJson = '/apps.json'
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch(appsJson),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch(appsJson),
        Component: Apps,
        
      },
      {
        path: "installed-apps",
        loader: () => fetch(appsJson),
        Component: InstalledApps,
        
      },
      {
        path: "app/:appId/:appTitle",
        loader: () => fetch(appsJson),
        Component: AppDetails,
      },
      {
        path: "*",
        Component: Error,
      }
    ],
  },
]);

export default router;