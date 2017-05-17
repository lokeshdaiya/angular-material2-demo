import {Component,Input} from '@angular/core'

@Component({
	selector:'heading',
	template:`
			<style>
			
			h3:before{
					counter-increment:inc;
					content:counter(inc)".) "
			}
			</style>
			<md-card>
				<md-card-content>
					<h3>Material Card Exammple</h3>
					<gallery></gallery>
					<h3>Accessibility</h3>
					<div (click)='displayAlert()' button-accessible>I am accessible div</div>
					<h3>Form Examples</h3>
					<form-example ruf-Accessible></form-example>
				</md-card-content>
			</md-card>

			 `,
	
})

export class TestComponent{
	displayAlert(){
		alert("I am click test");
	}
}
