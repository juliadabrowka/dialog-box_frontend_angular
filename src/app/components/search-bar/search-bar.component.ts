import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {Token} from '../../inferface/model';
import {FormControl} from '@angular/forms';
import {debounceTime, map, startWith, tap} from 'rxjs/operators';
import {isNil, isNotNil} from 'ng-zorro-antd/core/util';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  @Input() public tokens: Token[] | undefined | null;
  public readonly searchTerm = new FormControl<string | null>(null);
  public readonly searchBar$ = this.searchTerm.valueChanges.pipe(
    startWith(() => this.searchTerm.value),
    map((x) => x as string | null | undefined)
  );
  public isSearched: boolean | null | undefined;
  @Output() public readonly searchedTokens = new EventEmitter<Token[]>();
  @Output() public readonly searching = new EventEmitter<boolean>();

  constructor(private readonly cdr: ChangeDetectorRef) {

    this.searchBar$.pipe(
      debounceTime(300),
      tap(
        (filter) => {
          this.isSearched = !isNil(filter) && filter.length > 0;
          this.searching.emit(this.isSearched)
        }
      ),
      map(s => isNotNil(s) ? s : "")
    ).subscribe((search) => {
      let searchTokenArrayResult :Token[] = [];
      this.tokens?.forEach(token => {
        if(token.title.includes(search)) {
          searchTokenArrayResult.push(token);
        }
      })
      this.searchedTokens.emit(searchTokenArrayResult);
      this.cdr.markForCheck()
    })
  }
}
