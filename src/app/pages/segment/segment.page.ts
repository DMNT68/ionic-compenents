import { IonSegment } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-segment',
	templateUrl: './segment.page.html',
	styleUrls: ['./segment.page.scss']
})
export class SegmentPage implements OnInit {
	@ViewChild(IonSegment, { static: false }) segment: IonSegment;
	superHeroes: Observable<any>;
	publisher = '';
	constructor(private dataServices: DataService) {}

	ngOnInit() {}

	ionViewDidEnter() {
		this.segment.value = 'todos';
		this.superHeroes = this.dataServices.getSuperHeroes();
	}

	segmentChanged(event) {
		const valorSegmento = event.detail.value;
		if (valorSegmento === 'todos') {
			this.publisher = '';
			return;
		}
		this.publisher = valorSegmento;
	}
}
