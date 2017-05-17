import {Component,Directive} from '@angular/core'

@Directive({
	selector:'menuitems'
})
export class MenuItemsDirective{

}

@Component({
	selector:'custom-menu',
	templateUrl:'menu.component.html',
	styleUrls:['menu.component.css'],
	host:{
		'role': 'Menu',
		'aria-label':'Menu'
	}
})

export class MenuComponent{

}