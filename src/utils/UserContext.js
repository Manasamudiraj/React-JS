import { createContext } from "react";

// it will take this default value if no provider value is given
const UserContext = createContext({ loggedIn: "Default user" });

export default UserContext;
