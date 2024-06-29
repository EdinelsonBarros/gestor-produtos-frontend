import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //aprender a implementar CanActiveFn
 return sessionStorage.getItem("acess-token") ?  true : false
   
};
