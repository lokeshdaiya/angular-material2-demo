	import { Component,OnInit,Input,Directive} from '@angular/core';
	import {ApiService} from './services/api.service'
	import {Observable} from 'rxjs/Observable';


	@Directive({
		selector: 'grid-search'
	})

	export class GridSearchDirective{
	}

	@Component({
		selector: 'grid-table',
		template: `<input type="search" *ngIf="filter" [(ngModel)]='filterString' [attr.placeholder]='placeholder'>
					<table class="table">
						<tr class="table_header">
							<td *ngFor="let column of columns ">
								{{column.column |uppercase}}
							</td>
						</tr>
						<tr *ngFor="let content of data|myfilter:filterString">
							<td *ngFor='let column of columns'>
								{{content[column.column]}} 
							</td>
						</tr>
					</table>
		`,
		styleUrls:['./grid.component.css'],
	})


	export class GridComponent implements OnInit {
		placeholder:any;
		@Input() filter:boolean=true;
		@Input() searchPlaceholder:any="Search";
		@Input() data:any[]=[];
		@Input() columns:any[]=[
								{column:'id'},
								{column:'title'},
								{column:'body'},
							   ]
		filterString:string="";
		constructor(private _apiservice:ApiService){}
		ngOnInit():void{
			this.setPlaceHolder();
			this.bindGridData();
		}
		bindGridData(){
			console.log("-----In bindGridData---------")
			this._apiservice.get("posts")
						.subscribe(
							data=>{
								this.data=data
								this.getKeys();
							},
							error=>console.log(`Error while fetching data ${error}`),
							()=>console.log("success")
							)
		}
		getKeys():void{
			console.log("-----In Get keys method------`n setting columns")
			for (let property in this.data[0]) {
				this.columns.push(property)
			}
			console.log(this.columns)
		}
		setPlaceHolder(){
			this.placeholder=this.searchPlaceholder
		}

	}