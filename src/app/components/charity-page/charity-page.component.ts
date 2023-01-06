import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-charity-page',
  templateUrl: './charity-page.component.html',
  styleUrls: ['./charity-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharityPageComponent {
  public readonly content = `There is a lot of things in this world, which don’t get the needed attention. We hope we can bring the awareness to certain issues by making graphics about them, but we thought about other ways to contribute in some way.
    We decided to give up 50% of the dialog box profits to the charity.<br/><br/>
    Organisations will be chosen depending on the topic of the given series, we are very open to contributing to different issues all around the world. That’s why we want to hear on this topic from you as well! In this project you have the opportunity to have a say in where we donate the money.<br/><br/>`
}
