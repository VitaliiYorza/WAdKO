import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ImageScanModel from 'shared-lib/models/image-scan-model';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  currentImageScan!: ImageScanModel;
  result: boolean | null = null;
  selectedFileDataUrl: string = '';
  identificationItemType: string = '';
  isNumber: boolean = false;

  constructor(private imageService: ImageService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentImageScan = this.imageService.getCurrentImageScan();
    if (this.currentImageScan) {
      this.result = this.currentImageScan.result;
      this.selectedFileDataUrl = this.currentImageScan.imageBase64URL;
      this.identificationItemType = this.currentImageScan.imageItemType;
    }
    // console.log(this.currentImageScan);
    console.log(this.result);
    // console.log(this.selectedFileDataUrl);
    // console.log(this.identificationItemType);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
