import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsValidationsService {
  constructor(private http: HttpClient) { }

  getOwnInfo(): Observable<any> {
    return this.http.get<any>(`/mkt/api/mp/userinfo/own`)
    .pipe();
  }

  updateInfo(id, realName, nickName, gender, phone, province, city,
    about, headimgUrl): Observable<any> {
    return this.http.put<any>(`/mkt/api/mp/userinfo`, {id, realName, 
      nickName, sex: gender, phone, province, city,
      about, headimgUrl})
    .pipe();
  }

}
