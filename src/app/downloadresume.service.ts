import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        'Access-Control-Allow-Origin': '*',
        Host: 'raw.githubusercontent.com',
        Connection: 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
        'Sec-Fetch-User': '?1',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'navigate',
        Referer: 'https://github.com/mstraining/resume/blob/master/DBS-Profile-Updated.pdf',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'If-None-Match': 'W/82b2377659bdee7db5680110a8ea6463ae12067ce7fc34885d0a19a350be9385',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept, Referer'
      }
    });
  }
}
