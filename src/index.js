import "./style.css";
import Mortgage from "./mortgage";
import page from "./page";

const webpage = new page.Page();

//go straight to table
webpage.screen = new page.TableScreen(webpage, new Mortgage(100, 100, .1));