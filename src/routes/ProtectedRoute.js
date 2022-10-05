import Create from "../screens/protected/Create";
import Edit from "../screens/protected/Edit";
import List from "../screens/protected/List";

export const protectedRoutes = [
    { name: "List", component: List, headerShown: true, title: "List" },
    { name: "Create", component: Create, headerShown: true, title: "Create Note" },
    { name: "Edit", component: Edit, headerShown: true, title: "Edit Note" },
]