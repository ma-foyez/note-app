import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import { colors } from "../theme/colors";

export const publicRoutes = [
    { name: "Login", component: Login, headerShown: false , title: "Login", headerTintColor: colors.green },
    { name: "Register", component: Register, headerShown: true , title: "Register", headerTintColor: colors.green  },
]