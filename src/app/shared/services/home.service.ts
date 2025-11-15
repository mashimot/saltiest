import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  API_URL: string = "/assets/_mock/";

  constructor(private http: HttpClient) {}

  public getHome() {
    return this.http.get<any>(`${this.API_URL}home.json`);
  }
}
