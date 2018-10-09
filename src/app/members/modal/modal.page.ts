import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  article;

  constructor(private modalController: ModalController,
              private commandeService: CommandeService,
              private navParams: NavParams) { }

  ngOnInit() {
    this.article = this.commandeService.currentArticle;
    console.log(this.commandeService.currentArticle);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
