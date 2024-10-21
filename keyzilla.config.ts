import { Config } from "keyzilla/config";

export const config = Config({
  production: {
    projectName: "keyzilla",
    envType: "org"
  },
  credentials: {
    email: process.env.EMAIL!,
    secretCode: process.env.SECRET_CODE!,
  },
});
