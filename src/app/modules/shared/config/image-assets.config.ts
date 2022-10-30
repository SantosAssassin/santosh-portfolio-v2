import { ProfileImageModel, SidebarIconsModel, SkillsLogoModel, SocialLogoModel } from "../model/image-assets.model";

export class ImageAssetsConfig {

    assetsPath : string = './assets/img'

    getSidebarIcons() {
        const sidebarIcons: SidebarIconsModel = {
            aboutMe: `${this.assetsPath}/icons/information-circle-outline.svg`,
            workExperience: `${this.assetsPath}/icons/briefcase-outline.svg`,
            education: `${this.assetsPath}/icons/school-outline.svg`,
            achievement: `${this.assetsPath}/icons/trophy-outline.svg`,
            blog: `${this.assetsPath}/icons/newspaper-outline.svg`,
            home: `${this.assetsPath}/icons/home-outline.svg`,
        }
        return sidebarIcons;
    }

    getSkillsLogos() {
        const skillsLogos: SkillsLogoModel = {
            angular: `${this.assetsPath}/skills/angular.png`,
            nodeJs: `${this.assetsPath}/skills/node.png`,
            javaScript: `${this.assetsPath}/skills/JavaScript.png`,
            html: `${this.assetsPath}/skills/html.png`,
            scss: `${this.assetsPath}/skills/sass.png`,
            css: `${this.assetsPath}/skills/css.png`,
            firebase: `${this.assetsPath}/skills/firebase.png`
        }
        return skillsLogos;
    }

    getSocialLogos(){
        const socialLogos: SocialLogoModel = {
            gmail : `${this.assetsPath}/social/mail.png`,
            linkedIn : `${this.assetsPath}/social/linkedin.png`,
            github: `${this.assetsPath}/social/github.png`
        }
        return socialLogos;
    }

    getprofileImage(){
        const profileImage : ProfileImageModel = {
            home : `${this.assetsPath}/profile/profile-home.png`
        }
        return profileImage;
    }

}