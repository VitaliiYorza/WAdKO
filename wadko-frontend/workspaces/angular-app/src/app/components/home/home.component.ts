import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ElectronIpcService} from "../../services/electron-ipc.service";
import EmployeeModel from "shared-lib/.dist/models/employee-model";
import {WindowApiConst} from "shared-lib/.dist/apis/window-api-consts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chosenEmp!: EmployeeModel;

  constructor(private router: Router) {
  }

  history() {

  }

  scan() {
    this.router.navigate(['/image-selector'])
  }
}
