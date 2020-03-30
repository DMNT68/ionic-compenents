import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IonList } from '@ionic/angular';

@Component({
	selector: 'app-list',
	templateUrl: './list.page.html',
	styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
	usuarios: Observable<any>;
	@ViewChild('lista', { static: false }) lista: IonList;

	constructor(private dataService: DataService, private toastCtrl: ToastController) {}

	ngOnInit() {
		this.usuarios = this.dataService.getUsers();
	}

	async presentToast(message: string, color: string) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2000,
			color
		});
		toast.present();
	}

	favorite(user) {
		// console.log('favorite', user);
		this.presentToast('Guardó en favoritos', 'primary');
		this.lista.closeSlidingItems();
	}
	share(user) {
		// console.log('share', user);
		this.presentToast('Compartido!', 'secondary');
		this.lista.closeSlidingItems();
	}
	borrar(user) {
		// console.log('borrar', user);
		this.presentToast('Borrado!', 'danger');
		this.lista.closeSlidingItems();
	}
}
