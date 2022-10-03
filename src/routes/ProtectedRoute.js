import Create from "../screens/protected/Create";
import Edit from "../screens/protected/Edit";
import List from "../screens/protected/List";
import { colors } from "../theme/colors";

export const protectedRoutes = [
    { name: "List", component: List, headerShown: true , title: "List", headerTintColor: colors.green },
    { name: "Create", component: Create, headerShown: true , title: "Create Note", headerTintColor: colors.green },
    { name: "Edit", component: Edit, headerShown: true , title: "Edit Note", headerTintColor: colors.green },
]