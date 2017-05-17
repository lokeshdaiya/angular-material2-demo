import {Component} from '@angular/core'

@Component({
	selector:'gallery',
	templateUrl:'gallery.component.html',
})

export class GalleryComponent{
	items:any[]=[
                 {title:'Img1',description:'img1 decription....',img:'https://material.angular.io/assets/img/examples/shiba2.jpg'}
                // {title:'Img2',description:'img2 decription....',img:'https://material.angular.io/assets/img/examples/shiba2.jpg'},
                // {title:'Img3',description:'img3 decription....',img:'https://material.angular.io/assets/img/examples/shiba2.jpg'},
                // {title:'Img4',description:'img4 decription....',img:'https://material.angular.io/assets/img/examples/shiba2.jpg'}
			 ]
}
	