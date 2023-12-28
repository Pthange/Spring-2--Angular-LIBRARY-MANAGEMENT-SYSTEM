import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {
  router: any;

  goBack() {
    this.router.navigate(['/home']); // Replace '/' with the appropriate route
  }
}
