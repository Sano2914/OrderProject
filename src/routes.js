
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
    layout: "/client",
    icon: <Printer/>
  },
  {
    path: "/scan",
    name: "Scan",
    component: ScanIndex,
    layout: "/client",
    icon: <Scan  variant="Outline"/>
  },
  {
    path: "/electronic",
    name: "Electronic S and S",
    component: Electronic,
    layout: "/client",
    icon: <SmsTracking variant="Outline"/>
  },
  {
    path: "/usb",
    name: "USB / CD",
    component: USBCD,
    layout: "/client",
    icon: <Cd variant="Outline"/>
  },
  {
    path: "/chicago",
    name: "Chicago - Tree Towns",
    component: ChicagoTreeTown,
    layout: "/client",
    icon: <Tree variant="Outline"/>
  },
  
];
export default routes;