import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import {map, switchMap, takeUntil} from 'rxjs/operators'
import { Destroyer } from 'src/app/helpers/destroyer';
import {Serie} from '../../inferface/model';

@Component({
  selector: 'app-serie-page',
  templateUrl: './serie-page.component.html',
  styleUrls: ['./serie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeriePageComponent extends Destroyer {
  public serieDetails: any | undefined;

  constructor(private serieService: DataService,
    private route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef) {
      super();

    this.route.data.pipe(
      map(data => data.slug as any),
    ).subscribe(result => {
      this.serieDetails = result;
      this.cdr.markForCheck()
    })
    }
}
