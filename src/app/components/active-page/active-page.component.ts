import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from 'src/app/data.service';
import {Serie} from 'src/app/inferface/model';

@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivePageComponent {
  public readonly serie$: Observable<Serie[]> | undefined;

  constructor(private dataService: DataService) {
    this.serie$ = this.dataService.getActivePage()
  }
}
