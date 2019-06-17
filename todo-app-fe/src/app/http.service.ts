import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(public http: HttpClient) { }

  /**
   * Don't pass 2nd paramater if not required.
   * @param  {} url
   * @param  {Object} requestParams?
   */
  get<T>(url, requestParams?: Object) {
    let options = {};
    options = this.getOptions(requestParams);
    return this.http.get<T>(url, options);
  }

  /**
   * 2nd param: Pass atleast null if no body for your request.
   * Don't pass 3rd paramater if not required.
   * @param  {} url
   * @param  {any} postBody
   * @param  {Object} requsetParams?
   */
  post<T>(url, postBody: any, requsetParams?: Object) {
    let options = {};
    options = this.getOptions(requsetParams);
    return this.http.post<T>(url, postBody, options);
  }

  /**
   * Don't pass 2nd paramater if not required.
   * @param  {} url
   * @param  {Object} requestParams?
   */
  delete(url, requestParams?: Object) {
    let options = {};
    options = this.getOptions(requestParams);
    return this.http.delete(url, options);
  }

  /**
   * 2nd param: Pass atleast null if no body for your request.
   * Don't pass 3rd paramater if not required.
   * @param  {} url
   * @param  {} putData
   * @param  {Object} requsetParams?
   */
  put<T>(url, putData, requsetParams?: Object) {
    let options = this.getOptions(requsetParams);
    return this.http.put<T>(url, putData, options);
  }

  /**
   * @param  {Object} requestParams?
   */
  getOptions(requestParams?: Object) {
    let options = {};
    if (requestParams !== undefined) {
      let httpParams = new HttpParams();
      Object.keys(requestParams).forEach(function (key) {
        httpParams = httpParams.append(key, requestParams[key]);
      });

      options["params"] = httpParams;
    }

    return options;
  }

}