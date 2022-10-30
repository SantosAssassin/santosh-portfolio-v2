import { Component, Input } from "@angular/core";

import { ProfileImageModel, SocialLogoModel } from "../../shared/model/image-assets.model";

@Component({
    selector : "portfolio-picture",
    templateUrl: './portfolio-picture.component.html',
    styleUrls: ['./portfolio-picture.component.scss']
})

export class PortfolioPictureComponent {
    @Input() socialLogos !: SocialLogoModel;
    @Input() profileImage !: ProfileImageModel;
}