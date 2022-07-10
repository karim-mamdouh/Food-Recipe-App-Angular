import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LanguageInterceptorService } from './language-interceptor.service';
import { ProgressLoaderInterceptorService } from './progress-loader-interceptor.service';

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ProgressLoaderInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptorService,
    multi: true,
  },
];
