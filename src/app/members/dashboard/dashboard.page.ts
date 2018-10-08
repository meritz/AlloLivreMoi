import { AuthenticationService } from './../../services/authentication.service';
import { CommandeService } from '../../services/commande.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data: any;
  page: 0;

  constructor(private authService: AuthenticationService, private commandeService: CommandeService,) { }

  ngOnInit() {
    this.commandeService.getData(`liste_commande`)
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  logout() {
    this.authService.logout();
  }

}
