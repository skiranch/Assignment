import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LeftComponent} from './left/left.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppComponent} from './app.component';
import {EmptyComponent} from './empty/empty.component';
import {BodyComponent} from './body/body.component';
import {HomeComponent} from './home/home.component';

const routes:Routes=[
    {path:'',redirectTo:'/galleries',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'galleries', component:BodyComponent},
    {path:'menus', component:EmptyComponent}

    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[],

})

export class AppRouting{}

