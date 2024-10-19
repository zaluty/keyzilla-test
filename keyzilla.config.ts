import { KeyzillaConfig } from "keyzilla/config";

export const config = KeyzillaConfig({
    credentials: {
        email: process.env.EMAIL! || "hamzaredone6@gmail.com",
        secretCode: process.env.SECRET_CODE! || ""
    },
    production: {
        projectName:  "hamza",
        envType:  "org"
    },
});

 
