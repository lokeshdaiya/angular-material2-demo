import {Directive,ElementRef,Input,HostListener,OnInit,HostBinding} from '@angular/core'

@Directive({
	selector:'[button-accessible]'
})
export class AccessibleDirective implements OnInit{
	@HostBinding('attr.role') role='button';
	@HostBinding('attr.aria-label') ariaLabel='button';
	@HostBinding('attr.tabindex') tabindex=0;

	constructor(private el:ElementRef){}
	ngOnInit():void{
		console.log(this.el.nativeElement);

	}

	@HostListener('keydown', ['$event']) 
	onKeydown(event:KeyboardEvent){
		if(event.keyCode==13){
			this.el.nativeElement.click();
		}

	}

}

@Directive({
	selector: '[ruf-Accessible]'
})

export class rufAccessibleDirective implements OnInit {
	constructor(private el:ElementRef){		
	}
	ngOnInit():void{
		console.log(this.el.nativeElement.attributes);
		if(this.el.nativeElement.style.display=="none"){
			this.el.nativeElement.setAttribute("aria-hidden","true")
		}else{
			this.el.nativeElement.setAttribute("aria-hidden","false")
		}
	}


}