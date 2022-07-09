import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { ProgressLoaderService } from '../progress-loader/progress-loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(public _progressLoaderService:ProgressLoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this._progressLoaderService.isLoading.next(true);

   return next.handle(req).pipe(
    finalize(
      ()=>{
        this._progressLoaderService.isLoading.next(false);
      }
    )
   )
  }
}