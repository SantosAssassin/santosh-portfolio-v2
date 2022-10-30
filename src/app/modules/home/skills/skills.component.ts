import { Component, Input } from "@angular/core";
import { SkillsLogoModel } from "../../shared/model/image-assets.model";

@Component({
    selector : 'skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['skills.component.scss']
})

export class SkillsComponent {
    @Input() skillsDetails !: SkillsLogoModel;
}