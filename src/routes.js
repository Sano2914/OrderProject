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
import Electronic from "views/Electronic-s/Electronic"; 

import { Printer, Scan, SmsTracking, Cd, Tree } from "iconsax-react";
import ScanIndex from "views/Scan/scanIndex";
import USBCD from "views/USB/USB-CD";
import ChicagoTreeTown from "views/Chicago-Tree-Town/CTT";

var routes = [
  {
    path: "/index",
    name: "Print",
    component: Index,
    layout: "/admin",
    icon: <Printer/>
  },
  {
    path: "/scan",
    name: "Scan",
    component: ScanIndex,
    layout: "/admin",
    icon: <Scan  variant="Outline"/>
  },
  {
    path: "/electronic",
    name: "Electronic S and S",
    component: Electronic,
    layout: "/admin",
    icon: <SmsTracking variant="Outline"/>
  },
  {
    path: "/usb",
    name: "USB / CD",
    component: USBCD,
    layout: "/admin",
    icon: <Cd variant="Outline"/>
  },
  {
    path: "/chicago",
    name: "Chicago - Tree Towns",
    component: ChicagoTreeTown,
    layout: "/admin",
    icon: <Tree variant="Outline"/>
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
