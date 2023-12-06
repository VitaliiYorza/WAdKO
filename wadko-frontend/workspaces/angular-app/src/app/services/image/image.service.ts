import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ImageScanModel from "shared-lib/models/image-scan-model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  currentImageScan: Subject<ImageScanModel> = new Subject<ImageScanModel>();
  imageScan!: ImageScanModel;

  constructor(private http: HttpClient) { }

  scanImage(imageToScan: ImageScanModel) {
    let apiUrl = 'http://127.0.0.1:8081/scanImage';

    return this.http.post<ImageScanModel>(apiUrl, imageToScan);
  }

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
