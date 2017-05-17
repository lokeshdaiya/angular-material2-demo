import {Component,Input} from '@angular/core'
import {ApiService} from './services/api.service'

@Component({
	selector:'serviceExample',
	template:`
	<button (click)='getPost()'>Show Posts</button>
	<button (click)='addPost()'>Add Posts</button>
	<div *ngIf='loading'>Loading....</div>
	<ng-container *ngIf="posts">
		<div *ngFor='let post of posts'>
			<h3>{{post.id}}.){{post.title}}</h3>
			
			<p>{{post.body}}</p>
		</div>
	</ng-container>
	`
})

export class ServiceComponent{
	posts:any[];
	postAdded:any
	loading:boolean=false;
	constructor(private _apiservice:ApiService){}
	getPost():any{
		this.loading=true;
		this._apiservice.get("posts")
						 .subscribe(
						 	data=>{this.posts=data;this.loading=false},
						 	error=>console.log("Error get request "+error),
						 	()=>console.log(this.posts)
						 	)
	}
	addPost():any{
		let dummyPost={"userId": 50001, "id": 50001, "title": "This is json test", "body": "this is json test"}
		this._apiservice.post("posts",dummyPost)
						.subscribe(
							data=>{
                this.postAdded= JSON.stringify(data);
                //this.posts.push(JSON.parse(this.postAdded));

							},
							error=>console.log("Error post request"+error),
							()=>console.log(this.postAdded)
							)
	}

}
