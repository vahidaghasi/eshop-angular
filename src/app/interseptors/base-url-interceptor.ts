import {HttpEvent, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {ApiAddress} from "../utillties/api-address";

import {Observable} from "rxjs";

export const baseUrlInterceptor: HttpInterceptorFn=(req,next)=> {

  if(!req.url.startsWith("http"))
  {
    let modifyReq: HttpRequest<any> = req.clone({
      url: `${ApiAddress.baseAddress}${req.url}`,
    });
    return next(modifyReq);
  }
  else
  {
    return next(req);
  }
};
