"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./home/index");
exports.appRoutes = [
    { path: 'home', component: index_1.HomeComponent },
    { path: 'aboutUs', component: index_1.AboutUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map