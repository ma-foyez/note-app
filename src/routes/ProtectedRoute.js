import Create from "../screens/protected/Create";
import Edit from "../screens/protected/Edit";
import List from "../screens/protected/List";
import { colors } from "../theme/colors";

export const protectedRoutes = [
    { name: "List", component: List, headerShown: false , title: "List", headerTintColor: colors.green },
    { name: "Create", component: Create, headerShown: false , title: "Create Note", headerTintColor: colors.green },
    { name: "Edit", component: Edit, headerShown: false , title: "Edit Note", headerTintColor: colors.green },
]