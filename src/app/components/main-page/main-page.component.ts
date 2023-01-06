import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Token } from 'src/app/inferface/model';
import {SearchBarComponent} from '../search-bar/search-bar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements AfterViewInit {
  public tokens$: Observable<Token[]> | undefined;
  public searching: boolean | undefined;
  public tokens: Token[] | undefined;
  @ViewChild(SearchBarComponent) public searchBarComponent: SearchBarComponent | undefined;

  constructor(
    private readonly dataService: DataService,
  ) {
    this.tokens$ = this.dataService.getMainPage();
  }

  public getTokens(tokens: Token[]) {
    this.tokens = tokens
  }

  public getSearchState(isSearching: boolean) {
    this.searching = isSearching;
  }

  ngAfterViewInit() {
    this.tokens = this.searchBarComponent?.tokens ?? [];
    this.searching = this.searchBarComponent?.isSearched ?? false;
  }
}
