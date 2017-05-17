import {Injectable} from '@angular/core'

import {Http,Response,Headers,ResponseOptions,RequestOptions} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';

@Injectable()
export class ApiService {
	private baseUrl="https://jsonplaceholder.typicode.com";
	constructor(private _http:Http){}

	get(endpoint){
		return this._http.get(`${this.baseUrl}/${endpoint}`)
					.map(res=>res.json())
					.catch(this.handleError)
	}

	post(endpoint,body){
		let url=`${this.baseUrl}/${endpoint}`;
		let headers= new Headers({'Content-Type': 'application/x-www-form-urlencoded' });
		let options = new RequestOptions({headers:headers,method:"post"})
		return this._http.post(url,body,options)
					.map(res=>res.json())
					.catch(this.handleError)
	}

	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json()||'error');
		
	}

}