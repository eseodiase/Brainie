import nav from "./components/nav.js";
import aside from "./components/aside.js";
import main from "./components/main.js";

const app =()=>{
    document.querySelector(".nav").innerHTML = (nav());
    document.querySelector(".aside").innerHTML = (aside());
    document.querySelector(".main").innerHTML = (main());
}
export default app;