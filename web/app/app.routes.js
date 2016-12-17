"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var auth_guard_1 = require('./login/auth.guard');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map