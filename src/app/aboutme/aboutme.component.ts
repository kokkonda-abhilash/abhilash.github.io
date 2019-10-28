import { Component, OnInit } from '@angular/core';
import { DownloadresumeService } from '../downloadresume.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private resumeService: DownloadresumeService) { }

  downloadResume() {
    this.resumeService.download()
      .subscribe(response => {
        const blob: any = new Blob([response.blob()], { type: 'application/octet-stream; charset=utf-8' });
        window.location.href = response.url;
      });
  }

  ngOnInit() {
  }
}
