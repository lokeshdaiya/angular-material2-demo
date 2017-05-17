import {Pipe,PipeTransform} from "@angular/core"
@Pipe({
	name:'changefirstcase'
})

export class CaptalizePipe implements PipeTransform {
	transform(input:string):string{
		let charArray=input.split("");
		let firstCharacter=charArray[0];
		charArray[0]=firstCharacter.toUpperCase();
		return charArray.join("");

	}

}


@Pipe({
	name: 'myfilter'
})

export class MyFilterPipe implements PipeTransform{
	transform(items:any,value:any):any[]{
		if(!items) return;
		return items.filter(item=> {
			for(var property in item){
				if(new RegExp(value).test(item[property])){
					return true;
				}
			}
		 
		})
   }
}
