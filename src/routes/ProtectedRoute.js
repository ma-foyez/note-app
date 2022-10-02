import Create from "../screens/protected/Create";
import Edit from "../screens/protected/Edit";
import List from "../screens/protected/List";

export const protectedRoutes = [
    { name: "List", component: List },
    { name: "Create", component: Create },
    { name: "Edit", component: Edit },
]