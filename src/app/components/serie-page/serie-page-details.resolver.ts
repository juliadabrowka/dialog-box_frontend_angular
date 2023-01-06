import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DataService} from '../../data.service';

@Injectable({
  providedIn: 'root'
})
export class SeriePageDetailsResolver implements Resolve<any> {
  constructor(private readonly dataService: DataService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataService.getSeriePage(route.params.slug);
  }
}
