import { createBrowserRouter } from "react-router";
import { BASE_PATH } from "@/lib/config";
import NotFound from "@/pages/error/NotFound";
import Home from "@/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
], {
    basename: BASE_PATH,
})

export default router;