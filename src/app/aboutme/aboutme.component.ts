import { Component, OnInit } from '@angular/core';
import { DownloadresumeService } from '../downloadresume.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private resumeService: DownloadresumeService) { }

  downloadResume(): void {
    this.resumeService.download()
      .subscribe(response => {
        console.log(response);
      },
      error => console.log('error downloading the resume' + error.toString()),
      () => console.log('downloaded resume'));
  }

  ngOnInit() {
  }
}
