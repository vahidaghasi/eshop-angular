import { Routes } from '@angular/router';
import {SiteHeader} from "./components/site-header/site-header";
import {Home} from "./pages/home/home";

import {RegisterComponent} from "./components/register-component/register-component";

export const routes: Routes = [
    {path: '', component:Home},
    {path:'register',component:RegisterComponent},
];
