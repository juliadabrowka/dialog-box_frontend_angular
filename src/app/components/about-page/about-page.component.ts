import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NzMessageService]
})
export class AboutPageComponent {
  public controls = {
    name: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.email]),
    message: new FormControl<string>('',[Validators.required, Validators.minLength(1)]),
    terms: new FormControl<boolean>(false),
  }
  public formGroup = this.fb.group(this.controls)
  public optionList = [
    {
      label: "Collaboration",
      value: 1
    },
    {
      label: "New project idea",
      value: 2
    },
    {
      label: "I need an advise",
      value: 3
    }
  ];
  public readonly header = 'Hi!';
  public readonly content = `We are a group of creators that like to hang out with each other. Since most of us are working in fields connected to graphics design, we felt like our conversations lacked a bit of imagery. That’s why we decided to make this project in our free time. <br/><br/>
We present to you the dialog box - a place, in which you can literally see our abstract thoughts and unique, free takes on different topics. A lot of things in the current world seem absurd and you can definitely see it in our “boxes” <br/><br/>
After a few months of making the designs together we feel like we are ready to share it with you! Each piece in d-box tells some story or captures certain feeling, we would love you to try and interpret it yourself! In the end the dialog is what started it and we are very happy to hear and discuss everyone’s feelings about different things, hope we can hear from you through our socials! <br/><br/>`

  constructor(private readonly messageService: NzMessageService,
              private readonly fb: NonNullableFormBuilder) {
  }

  public submitForm(fg: FormGroup){
    fg.reset()
    this.messageService.success("All good! We will contact you");
  }

}
