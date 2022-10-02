import Create from "../screens/protected/Create";
import Edit from "../screens/protected/Edit";
import List from "../screens/protected/List";

export const protectedRoutes = [
    { name: "List", component: List, headerShown: true },
    { name: "Create", component: Create, headerShown: true },
    { name: "Edit", component: Edit, headerShown: true },
]