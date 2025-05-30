import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CredentialService} from "../../../services/credential.service";
import {EncryptionService} from "../../../services/encryption.service";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {

  token: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private route: ActivatedRoute,
              private credentialService: CredentialService,
              private router: Router,
              private encryptionService: EncryptionService) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParams['token'];
  }

  async onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';
    const encryptedPassword = await this.encryptionService.encryptPassword(this.password);

    this.credentialService.resetPassword(this.token, encryptedPassword).subscribe(
      (response) => {
        this.loading = false;
        this.password = '';
        this.confirmPassword = '';
        this.successMessage = 'Password has been reset successfully';
        setTimeout(() => {
          this.router.navigate(['/login']);
        },1000)
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to reset password. Please try again.';
      }
    )
  }
}
