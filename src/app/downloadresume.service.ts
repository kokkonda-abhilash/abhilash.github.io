import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadresumeService {

  private readonly url = 'https://raw.githubusercontent.com/mstraining/resume/master/DBS-Profile-Updated.pdf';

  constructor(private http: HttpClient) { }

  download(): Observable<any> {
    return this.http.get(this.url, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      }, responseType: 'blob'
    });
  }
}
