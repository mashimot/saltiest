import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../_core/guards/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  email: string = "test@test.com";
  password: string = "test";
  error: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }


  private createForm(): void {
    this.loginForm = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (user) => this.handleLoginSuccess(user),
      error: (err) => this.handleLoginError(err),
    });
  }

  private handleLoginSuccess(user: { token?: string; [key: string]: any }): void {
    if (user?.token) {
      this.storeUser(user);
    }
  }

  private handleLoginError(err: any): void {
    this.error = err?.message || "Login failed. Please try again.";
  }

  private storeUser(user: any): void {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  get f() {
    return this.loginForm.controls;
  }
}
