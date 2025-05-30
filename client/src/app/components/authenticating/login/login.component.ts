import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CredentialService} from "../../../services/credential.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {AlertsService} from "../../../services/alerts.service";
import {GoogleAuthService} from "../../../services/authentication/google-auth.service";
import {SocialAuthApiService} from "../../../services/authentication/social-auth-api.service";
import {GitHubAuthService} from "../../../services/authentication/git-hub-auth.service";
import {ThemeService} from "../../../services/theme.service";
import {EncryptionService} from "../../../services/encryption.service";
import {FacebookAuthService} from "../../../services/authentication/facebook-auth.service";
import {LinkedInAuthService} from "../../../services/authentication/linked-in-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {

  attempts = 4;
  disabled: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  });

  isp1open: boolean = true;

  constructor(
    private router: Router,
    private credentialService: CredentialService,
    private googleAuthService: GoogleAuthService,
    private gitHubAuthService: GitHubAuthService,
    private facebookAuthService: FacebookAuthService,
    private linkedInAuthService: LinkedInAuthService,
    private socialAuthService: SocialAuthApiService,
    private encryptionService: EncryptionService,
    private cookieService: AuthService,
    public themeService: ThemeService,
    private alertService: AlertsService) { }

  ngOnInit() {
    this.googleAuthService.configureOAuth();
    this.gitHubAuthService.handleRedirectCallback();
    this.facebookAuthService.initializeFacebookSdk().then(r => {});
    this.linkedInAuthService.initializeLinkedInSdk().then(r => {});
  }

  ngAfterViewInit() {
    const icons = document.querySelectorAll('.material-icons');
    icons.forEach((icon) => {
      icon.setAttribute('translate', 'no');
    });

    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      this.loginForm.get('email')?.setValue(localStorage.getItem('email'));
      this.loginForm.get('password')?.setValue(localStorage.getItem('password'));
      this.loginForm.get('remember')?.setValue(true);
    }
  }

  loginUser() {
    this.attempts --;
    if (this.loginForm.valid) {
      if (this.attempts <= 0 || sessionStorage.getItem('LgnAtT') == '0'){
        sessionStorage.setItem('LgnAtT', '0');
        this.alertService.warningMessage('Too many attempts! Try again in 5 minutes', 'Warning');
        this.loginForm.reset();
        this.disabled = true;
        setTimeout(()=>{
          this.attempts = 4;
          sessionStorage.removeItem('LgnAtT');
          this.disabled = false;
        }, 1000 * 60 * 5);
        return;
      }

      const formData = this.loginForm.value;
      this.credentialService.login(formData.email, formData.password).subscribe(async (response: any) => {
        if (!response) {
          this.alertService.errorMessage('User doesn\'t exist or something went wrong', 'Error');
          return;
        }
        if (response.disabled){
          this.alertService.errorMessage('Your account is disabled', 'Error');
          return;
        }

        if (sessionStorage.getItem('LgnAtT') != '0'){
          this.cookieService.createSession(response);

          if (this.loginForm.get('remember')?.value) {
            localStorage.setItem('email', <string>this.loginForm.get('email')?.value);
            localStorage.setItem('password', <string>this.loginForm.get('password')?.value);
          } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
          }

          if (response.role === 'candidate' || !response.role) {
            this.cookieService.createUserID(response.employeeId);
            this.cookieService.createLevel(response.userLevel);
            this.cookieService.createAuthToken(response.token);
            this.cookieService.createRefreshToken(response.refreshToken);
            this.cookieService.unlock();
            this.router.navigate(['/candidate-profile']);
            this.alertService.successMessage('Login successful', 'Success');
          } else if (response.role === 'employer') {
            if (response.userLevel === "2") {
              this.cookieService.createUserID(response.employeeId);
              this.cookieService.createAdmin(response.email);
              this.cookieService.createAuthToken(response.token);
              this.cookieService.createRefreshToken(response.refreshToken);
              response.organizations?.forEach((organization: any) => {
                this.cookieService.createOrganizationID(organization.jobPortal || '');
              })
              this.cookieService.createLevel(response.userLevel);
              this.cookieService.unlock();
              this.router.navigate(['/dashboard']);
            }
            else if (response.userLevel === "3") {
              this.cookieService.createUserID(response.employeeId);
              this.cookieService.createProAdmin(response.email);
              this.cookieService.createAuthToken(response.token);
              this.cookieService.createRefreshToken(response.refreshToken);
              response.organizations?.forEach((organization: any) => {
                this.cookieService.createOrganizationID(organization.jobPortal || '');
              })
              this.cookieService.createLevel(response.userLevel);
              this.cookieService.unlock();
              this.router.navigate(['/pro']);
            }
          }
        } else {
          this.alertService.errorMessage('Too many attempts! Try again in 5 minutes', 'Warning');
        }
      }, error => {
        this.alertService.errorMessage(error.error.message, "Code: "+error.status);
      });
    } else {
      this.alertService.errorMessage('Form is not valid', 'Error');
    }
  }

  loginWithGoogle(): void {
    this.googleAuthService.loginWithGoogle();
  }

  loginWithGithub() {
    this.gitHubAuthService.loginWithGitHub();
  }

  loginWithLinkedin() {
    this.linkedInAuthService.loginWithLinkedIn();
  }

  loginWithFacebook() {
    this.facebookAuthService.loginWithFacebook();
  }

  togglePasswordVisibility(){
    const input: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    if (input.type === 'password'){
      input.type = 'text';
      this.isp1open = false;
    } else {
      input.type = 'password';
      this.isp1open = true;
    }
  }
}
