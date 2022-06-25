import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService, private httpClient: HttpClient) {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      httpClient.post("https://localhost:7054/api/users/", user).subscribe(token => console.log(token))
    });
  }

  ngOnInit(): void {
  }

}
