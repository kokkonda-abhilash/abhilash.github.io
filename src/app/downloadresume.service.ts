import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadresumeService {

  private readonly url = '/assets/documents/resume.docx';

  constructor(private http: HttpClient) { }

  download(): Observable<any> {
    return this.http.get(this.url);
  }
}
