import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = environment.apiUrl;
  baseUrlSimple = environment.apiUrlSimple;
  constructor(private http: HttpClient) { }

  requestMoreData(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/email/contact/${email}`, {}, {headers});
  }

  subscribeNewsLatter(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.put(`${this.baseUrl}/news-latter/subscribe`, {email: email}, {headers});
  }

  contactUs(contactUsDTO: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/email/contact-us`, contactUsDTO, {headers});
  }

  personalContact(personalContactDTO: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/email/personal-contact`, personalContactDTO, {headers});
  }

  requestBankPayment(bankPaymentDTO: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/email/bank-payment`, bankPaymentDTO, {headers});
  }

  addWhitelist(whitelist: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/whitelist-domains/add`, {
      domain: whitelist.domain,
      requestBy: whitelist.requestBy,
      active: false
    }, {headers});
  }

  getWhitelistByDomainName(domain: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/whitelist-domains/get`, {domain: domain}, {headers});
  }

  getByActiveDomain(domain: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/whitelist-domains/get-by-domain-and-active`, {domain: domain}, {headers});
  }

  validateRedirectUrl(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:password')
    });
    return this.http.post(`${this.baseUrl}/redirect/validate-url`, {domain: url}, {headers});
  }

  getSession(): Observable<any> {
    return this.http.get<any>(`${this.baseUrlSimple}/sso/session`, { withCredentials: true });
  }

  getTokens(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrlSimple}/api/auth/getTokens/${email}`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.get(`${this.baseUrlSimple}/sso/logout`, { withCredentials: true });
  }
}
