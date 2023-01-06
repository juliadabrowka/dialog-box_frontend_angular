import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DataService} from 'src/app/data.service';
import {SocialMediaUrls} from '../../shared/social-media-urls';
import {SocialMediaPicsPaths} from '../../shared/social-media-pics-paths';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Serie} from '../../inferface/model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  public series: Serie[] | undefined;
  public readonly urls = SocialMediaUrls;
  public readonly paths = SocialMediaPicsPaths;
  private readonly destroy$$ = new Subject<void>()

  constructor(private readonly dataService: DataService) {
    this.dataService.getActivePage()
      .pipe(takeUntil(this.destroy$$))
      .subscribe( data => this.series = data
    )
  }
}
