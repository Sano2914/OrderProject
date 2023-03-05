/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import { Printer, Scan, SmsTracking, Cd, Tree } from "iconsax-react";

var routes = [
  {
    path: "/index",
    name: "Print",
    component: Index,
    layout: "/admin",
    icon: <Printer/>
  },
  {
    path: "/icons",
    name: "Scan",
    component: Icons,
    layout: "/admin",
    icon: <Scan  variant="Outline"/>
  },
  {
    path: "/maps",
    name: "Electronic S and S",
    component: Maps,
    layout: "/admin",
    icon: <SmsTracking variant="Outline"/>
  },
  {
    path: "/user-profile",
    name: "USB / CD",
    component: Profile,
    layout: "/admin",
    icon: <Cd variant="Outline"/>
  },
  {
    path: "/tables",
    name: "Chicago - Tree Towns",
    component: Tables,
    layout: "/admin",
    icon: <Tree color="#000000" variant="Outline"/>
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
