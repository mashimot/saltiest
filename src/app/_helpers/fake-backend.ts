import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

// Define a strongly typed AuthResponse
interface AuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

const users: User[] = [
  {
    id: 1,
    username: "test",
    password: "test",
    email: "test@test.com",
    firstName: "First Name",
    lastName: "Last Name",
  },
  {
    id: 2,
    username: "hadouken",
    password: "hadouken",
    email: "hadouken@hadouken.com",
    firstName: "First Name",
    lastName: "Last Name",
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(100))
      .pipe(dematerialize());

    function handleRoute(): Observable<HttpEvent<any>> {
      switch (true) {
        case url.endsWith("/api/auth/register") && method === "POST":
          return register(body);
        case url.endsWith("/api/auth/login") && method === "POST":
          return authenticate(body);
        case url.endsWith("/users") && method === "GET":
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === "GET":
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === "DELETE":
          return deleteUser();
        default:
          return next.handle(request);
      }
    }

    function register(user: User): Observable<HttpEvent<any>> {
      if (users.find((x) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem("currentUser", JSON.stringify(users));

      return ok();
    }

    function authenticate(body: { email: string; password: string }): Observable<HttpEvent<AuthResponse>> {
      const { email, password } = body;
      const user = users.find(
        (x) => x.email === email && x.password === password
      );

      if (!user) return error("Username or password is incorrect");

      const response: AuthResponse = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        token: "fake-jwt-token",
      };

      return ok(response);
    }

    function getUsers(): Observable<HttpEvent<User[]>> {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function getUserById(): Observable<HttpEvent<User | undefined>> {
      if (!isLoggedIn()) return unauthorized();
      const user = users.find((x) => x.id === idFromUrl());
      return ok(user);
    }

    function deleteUser(): Observable<HttpEvent<any>> {
      if (!isLoggedIn()) return unauthorized();
      const remainingUsers = users.filter((x) => x.id !== idFromUrl());
      localStorage.setItem("currentUser", JSON.stringify(remainingUsers));
      return ok();
    }

    function ok<T = any>(body?: T): Observable<HttpResponse<T>> {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized(): Observable<never> {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function error(message: string): Observable<never> {
      return throwError({ error: { message } });
    }

    function isLoggedIn(): boolean {
      return headers.get("Authorization") === "Bearer fak3e-jwt-token";
    }

    function idFromUrl(): number {
      const urlParts = url.split("/");
      return parseInt(urlParts[urlParts.length - 1], 10);
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
