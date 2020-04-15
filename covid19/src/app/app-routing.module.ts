import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { HelpLinksComponent } from './help-links/help-links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes:Routes = [
    {path:'', component:DashboardComponent},
    { path:'dashboard', component: DashboardComponent },
    {path: 'faq', component: FaqComponent},
    {path:'helplink', component: HelpLinksComponent},
    {path:"**", component:PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
export const routingComponents = [DashboardComponent, FaqComponent, HelpLinksComponent,PageNotFoundComponent]