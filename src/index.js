import "./style.css";
import Mortgage from "./mortgage";
import page from "./page";

const webpage = new page.Page();

//go straight to table for development
//webpage.screen = new page.TableScreen(webpage, new Mortgage(5000, 60, .055));