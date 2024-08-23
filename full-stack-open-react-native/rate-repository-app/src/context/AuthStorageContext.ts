import { createContext } from "react";
import AuthStorage from "../utils/authStorage";

const AuthStorageContext = createContext(new AuthStorage);

export default AuthStorageContext;
