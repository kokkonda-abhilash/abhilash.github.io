import { Component, OnInit } from '@angular/core';
import { DownloadresumeService } from '../downloadresume.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private resumeService: DownloadresumeService) { }

  ngOnInit() {
  }

  downloadResume() {
    this.resumeService.download()
      .subscribe(response => {
        const blob: any = new Blob([response.blob()], { type: 'application/octet-stream; charset=utf-8' });
        window.location.href = response.url;
      });
  }
}
