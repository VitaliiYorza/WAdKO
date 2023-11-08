import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowApiConst } from 'shared-lib';
import ImageScanModel from 'shared-lib/models/image-scan-model';
import { ElectronIpcService } from 'src/app/services/electron-ipc.service';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {
  imageForm!: FormGroup;

  selectedFile!: File;
  selectedFilePath!: string;
  selectedFileDataUrl!: string;

  constructor(private electronIpcService: ElectronIpcService,
    private imageService: ImageService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.imageForm = this.fb.group({
      image: this.fb.control(this.selectedFileDataUrl, Validators.required),
      identificationItemType: this.fb.control('', Validators.required),
    })
  }

  onSelectPhoto() {
    console.log('button clicked');
    this.electronIpcService.invoke<string, string>(WindowApiConst.IMG_SELECT_INPUT, "image-select")
      .then(response => {
        this.selectedFileDataUrl = response;
        this.imageForm.value['image'] = response;
      })
  }

  onSubmit() {
    let val = this.imageForm.value;
    let imageToSend: ImageScanModel = {
      imageBase64URL: val['image'],
      imageItemType: val['identificationItemType'],
      result: true
    };
    console.log(imageToSend);
    this.imageService.setCurrentImageScan(imageToSend);
    this.router.navigate(['/result']);
  }
}
