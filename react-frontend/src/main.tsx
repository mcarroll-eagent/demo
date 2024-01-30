import ReactDOM from 'react-dom/client'
import Example from './example.tsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";



const router = createBrowserRouter([{
    path: "/",
    element: <Example/>
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    //<Example />
    <BrowserRouter>
        <App/>
    </BrowserRouter>

)
