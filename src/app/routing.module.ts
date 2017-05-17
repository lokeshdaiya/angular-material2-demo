import {NgModule} from '@angular/core';

import {RouterModule,Routes} from '@angular/router'

import {AppComponent} from './app.component';
import {TestComponent} from './test.component';
import {ServiceComponent} from './service-example.component';
import {HomeComponent} from './home.component'
import {GridComponent} from './grid.component'

const routes:Routes=[
					{path:'',redirectTo:'/home',pathMatch:'full'},
					{path:'home',component:HomeComponent},
					{path:'test',component:TestComponent},
					{path:'service',component:ServiceComponent},
					{path:'grid',component:GridComponent}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class RoutingModule{

}