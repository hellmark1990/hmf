import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';

import {ProfileComponent} from './profile/profile.component';

import {SettingsComponent} from './settings/settings.component';

import {CompaniesComponent} from './company/companies.component';
import {OneCompanyComponent} from './company/company.component';
import {NewCompanyComponent} from './company/new-company.component';

import {ClientsComponent} from './company/clients.component';
import {TagsComponent} from './company/tags.component';
import {TeamComponent} from './company/team.component';

import {ProjectsComponent} from './projects/projects.component';
import {OneProjectComponent} from './projects/one-project.component';
import {NewProjectComponent} from './projects/new-project.component';

// auth Components
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ResetComponent} from './login/reset.component';
import {ConfirmPassComponent} from './login/confirm-pass.component';
import {AuthGuard} from './login/auth.guard';

// Reports components
import {ReportsComponent} from './reports/reports.component';
import {ReportsPersonalComponent} from './reports/reports-personal.component';
import {ReportsByPeopleComponent} from './reports/reports-by-people.component';
import {ReportsByProjectComponent} from './reports/reports-by-project.component';
import {ReportsRecentActivityComponent} from './reports/reports-recent-activity.component';

// component 404
import {NotFoundComponent} from './404/not-found.component';

const appRoutes:Routes = [
    {path: '', component: DashboardComponent, canActivate: [AuthGuard]},


    // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    // {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    // {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
    // {path: 'tags', component: TagsComponent, canActivate: [AuthGuard]},
    // {path: 'team', component: TeamComponent, canActivate: [AuthGuard]},
    //
    // {path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]},
    // {path: 'project/:slug/:id', component: OneProjectComponent, canActivate: [AuthGuard]},
    // {path: 'projects/new', component: NewProjectComponent, canActivate: [AuthGuard]},
    //
    // {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
    // {path: 'reports/personal', component: ReportsPersonalComponent, canActivate: [AuthGuard]},
    // {path: 'reports/by-project', component: ReportsByProjectComponent, canActivate: [AuthGuard]},
    // {path: 'reports/by-people', component: ReportsByPeopleComponent, canActivate: [AuthGuard]},
    // {path: 'reports/recent-activity', component: ReportsRecentActivityComponent, canActivate: [AuthGuard]},
    //
    // {path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard]},
    // {path: 'company/:slug', component: OneCompanyComponent, canActivate: [AuthGuard]},
    // {path: 'companies/new', component: NewCompanyComponent, canActivate: [AuthGuard]},
    //
    //
    // {path: 'signup', component: SignupComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'reset_password', component: ResetComponent},
    // {path: 'confirm_password', component: ConfirmPassComponent},
    //
    // {path: '404', component: NotFoundComponent}
    // {path: '**', redirectTo: '/404'}
];

export const routing = RouterModule.forRoot(appRoutes);