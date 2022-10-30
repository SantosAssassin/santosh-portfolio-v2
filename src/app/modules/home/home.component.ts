import { Component } from "@angular/core";

import { HomeConfiguration } from "../shared/config/home.config";
import { ImageAssetsConfig } from "../shared/config/image-assets.config";
import { ProfileImageModel, SkillsLogoModel, SocialLogoModel } from "../shared/model/image-assets.model";

@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    styleUrls : ['./home.component.scss']
})

export class HomeComponent{
    homeConfig = new HomeConfiguration();
    imageAssetsConfig = new ImageAssetsConfig();
    welcomeTexts: object = this.homeConfig.welcomeTexts;
    skillsDetails: SkillsLogoModel[] = this.homeConfig.getSkillsDetails();
    socialLogos : SocialLogoModel = this.imageAssetsConfig.getSocialLogos()
    profileImage : ProfileImageModel = this.imageAssetsConfig.getprofileImage();
}