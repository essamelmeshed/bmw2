import { Observable } from 'rxjs';
import { App } from '../../models/app';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
  withCredentials: false,
};

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  constructor(
    private http: HttpClient,
  ) {
  }


  /**
   * full URl
   * 
   * 
   * @param resource 
   */
  fullRequestURL(resource: string | number): string {
    return App.baseUrl + '/' + resource;
  }

  /**
   * get 
   * 
   * 
   * @param resource 
   * @param params 
   */
  get(resource?: string | number, params?: {}): Observable<any> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.get(this.fullRequestURL(resource), httpOptions);
  }


  /**
   * post 
   * 
   * 
   * @param body 
   * @param resource 
   * @param params 
   */
  post(body: any = {}, resource?: string | number, params?: {}): Observable<any> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.post(this.fullRequestURL(resource), body, httpOptions);
  }

  /**
   * put 
   * 
   * 
   * @param body 
   * @param resource 
   */
  put(body: any = {}, resource?: string | number): Observable<any> {
    return this.http.put(this.fullRequestURL(resource), body, httpOptions);
  }

  /**
   * delete
   * 
   * 
   * @param params 
   * @param resource 
   */
  delete(resource?: string | number, params?: {}): Observable<any> {
    if (params) {
      resource += this.getArgs(params);
    }
    return this.http.delete(this.fullRequestURL(resource), httpOptions);
  }

  getArgs(options: any): string {
    if (!options) {
      return '';
    }
    var args = '?';
    Object.keys(options).forEach((key) => {
      args += this.optionToString(key, options[key]);
    });
    return args;
  }


  optionToString(key: string, value: any): string {
    if (!value) {
      return '';
    }
    var str = '';
    if (value instanceof Array) {
      value.forEach((element, index) => {
        str += `${key}[${index}]=${element}&`;
      });
    } else if (value instanceof Object) {
      Object.keys(value).forEach((element) => {
        if (value instanceof Object) {
          str += this.serializeObject(value[element], `${key}[${element}]`);
        } else {
          str += `${key}[${element}]=${value[element]}&`;
        }
      });
    } else {
      str += `${key}=${value}&`;
    }
    return str;
  }

  private serializeObject(obj: any, parentSerialized: string): string {
    var str = '';
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (value instanceof Object) {
        str += `${this.serializeObject(value, `${parentSerialized}[${key}]`)}`;
      } else {
        str += `${parentSerialized}[${key}]=${value}&`;
      }
    });
    return str;
  }

}
