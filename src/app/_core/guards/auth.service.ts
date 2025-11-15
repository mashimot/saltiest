import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  };
  //private API_URL: string = 'http://localhost:8000/api';
  private API_URL: string = "/api";

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser")),
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  isLogged() {
    return localStorage.getItem("currentUser") ? true : false;
  }

  login(user: User) {
    /*return this.http.post<any>(`${this.API_URL}/auth/login`, { 
            username: user.username, 
            password: user.password 
        }, this.httpOptions)*/
    return this.http
      .post<any>(`${this.API_URL}/auth/login`, user, this.httpOptions)
      .pipe(
        map((user: User) => {
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.router.navigate(["/home"]);
          }

          return user;
        }),
        tap((user) => {
          console.log("user", user);
        }),
      );
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  logout() {
    // remove user from local storage to log user out
    //localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }
}
