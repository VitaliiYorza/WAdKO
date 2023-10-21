import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ImageScanModel from "shared-lib/.dist/models/image-scan-model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  currentImageScan: Subject<ImageScanModel> = new Subject<ImageScanModel>();
  imageScan!: ImageScanModel;

  constructor() { }

  setCurrentImageScan(newImageScan: ImageScanModel): void {
    this.currentImageScan.next(newImageScan);
    this.imageScan = newImageScan;
  }

  getCurrentImageScan() {
    return this.imageScan;
  }

  getCurrentImageScanSub() {
    return this.currentImageScan.asObservable();
  }
}
