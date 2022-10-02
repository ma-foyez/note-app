import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

export const publicRoutes = [
    { name: "Login", component: Login, headerShown: false  },
    { name: "Register", component: Register, headerShown: false  },
]