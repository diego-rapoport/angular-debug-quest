import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const loadingService = new LoadingService();

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('3000')) {
    loadingService.loadingOn();
    return next(req).pipe(
      finalize(() => {
        loadingService.loadingOff();
      })
    );
  }

  return next(req);
};
