import { Component, Input } from "@angular/core";

@Component({
    selector: 'welcome-text',
    templateUrl: 'welcome-text.component.html',
    styleUrls: ['./welcome-text.component.scss']
})

export class WelcomTextComponent {
    @Input() welcomeTexts !: any;
}