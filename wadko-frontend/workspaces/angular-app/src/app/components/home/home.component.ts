import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ElectronIpcService} from "../../services/electron-ipc.service";
import {WindowApiConst} from "shared-lib/apis/window-api-consts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  history() {

  }

  scan() {
    this.router.navigate(['/image-selector'])
  }
}
