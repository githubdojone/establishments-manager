import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage =
      `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
