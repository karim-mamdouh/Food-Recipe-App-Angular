import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { ProgressLoaderService } from '../../progress-loader/progress-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressLoaderInterceptorService implements HttpInterceptor {

  constructor(public progressLoaderService: ProgressLoaderService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.progressLoaderService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(
        () => {
          this.progressLoaderService.isLoading.next(false);
        }
      )
    )
  }
}