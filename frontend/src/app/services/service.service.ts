import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from "../config/urls";
import { cors } from "../config/cors";

const apiURL = urls.api;
const corsHTTP = cors.httpOptions.headers;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  /* login(user: LoginI): Observable<JwtResponseI> {
    console.log('antes del post');
    return this.http.post<JwtResponseI>(`${apiURL}login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn); // guardar token
          }
        })
      );
  }

  register(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${apiURL}/register`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {            
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn); // guardar token
          }
        })
      ); */

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  getInfoCompany(jsonData) {
    const path = urls.api + 'company';
    console.log("jsonData \n"+jsonData);
    console.log("\n JSON.stringify(jsonData) \n"+JSON.stringify(jsonData));
    
    return this.http.post(path, "'" + JSON.stringify(jsonData) + "'", this.httpOptions);
  }

/*   getUniversities() {
    const path = urls.api + 'universities';
    return this.http.get(path);
  } */

/*   login(data: any) {
    this.http
      .post<any>(urls.api + '/login', data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
        const user = data[0];
        if (user) {
        } else {
          alert('Error Register 1');
        }
      }, error => {
        alert('Error Register 2');
      });
  } */

/*   register(data: any) {
    this.http
      .post<any>(urls.api + '/register', data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
        const user = data[0];
        if (user) {
        } else {
          alert('Error Register 1');
        }
      }, error => {
        alert('Error Register 2');
      });
  } */

/* 
  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  } */
}
