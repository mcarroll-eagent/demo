import ReactDOM from 'react-dom/client'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";



const router = createBrowserRouter([{
    path: "/",
    element: <App/>
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    //<Example />
    <BrowserRouter>
        <App/>
    </BrowserRouter>

)
