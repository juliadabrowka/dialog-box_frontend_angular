import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextContentComponent implements OnInit{
  @Input() public header: string | null | undefined;
  @Input() public content: string | null | undefined;
  public readonly signature = "~ dialog box team"

  ngOnInit() {
    this.content?.replace(/\n/g, '<br />');
  }
}
