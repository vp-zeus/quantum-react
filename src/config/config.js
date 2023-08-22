import devConfig from "./dev";
import prodConfig from "./prod";

const config = import.meta.env.MODE === "developement" ? devConfig : prodConfig;

export default config;
