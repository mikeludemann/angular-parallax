import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
		selector: 'parallax',
		templateUrl: './parallax.component.html',
		styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }
	@Input() image: any;

	@ViewChild('mainParallax', { read: ElementRef , static: true }) el: ElementRef;

	imageStyle = {
		"min-height": "calc(100vh)",
		"width": "100%",
		"background-attachment": "fixed",
		"background-position": "center",
		"background-repeat": "no-repeat",
		"background-size": "cover"
	};

	contentStyle = {
		"background-color": "#fff",
		"color": "#000",
		"padding": "10px"
	};

	constructor() { }

	ngOnInit() {
    this.el.nativeElement.children[0].style.backgroundImage = "url(" + this.image + ")";
	}

}
