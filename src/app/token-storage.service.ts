import { Injectable } from '@angular/core';

const TOKEN_KEY = 'your_token_key';
const USER_KEY = 'your_user_key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  

signOut() {
  window.sessionStorage.clear();
}

public saveToken(token: string) {
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.setItem(TOKEN_KEY, token);
}

public getToken(): any {
  return sessionStorage.getItem(TOKEN_KEY);
}

public saveUser(user: any) {
  window.sessionStorage.removeItem(USER_KEY);
  window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
}

public getUser(): any {
  return JSON.parse(sessionStorage.getItem(USER_KEY)as string);
}

}