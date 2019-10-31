import { Component, OnInit } from '@angular/core';
import { DownloadresumeService } from '../downloadresume.service';
// tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private resumeService: DownloadresumeService) { }

  downloadResume() {
    this.resumeService.download()
      .subscribe(response => this.doanloadResume(response),
      error => console.log('error downloading the resume' + error),
      () => console.log('downloaded resume'));
  }

  private doanloadResume(data: any) {
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  ngOnInit() {
  }
}
