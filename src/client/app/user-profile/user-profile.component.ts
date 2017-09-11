import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { BreadcrumbService } from '../core/services/breadcrumb.service';
import { DetailsComponent } from '../shared/components/details.component';
import { NotificationService } from '../core/services/notification.service';
import { AccountService } from '../core/services/account.service';
import { AccountModel } from '../core/models/account-model';
import { UserPictureService } from '../core/services/user-picture.service';

@Component({
  moduleId: module.id,
  selector: 'bs-user-profile',
  templateUrl: 'user-profile.component.html',
})
export class UserProfileComponent extends DetailsComponent<AccountModel> implements OnInit {
  protected _avatar: any;
  protected _isImageLoading: boolean;

  public get avatar(): any {
    return this._avatar;
  }

  public get isImageLoading(): boolean {
    return this._isImageLoading;
  }

  constructor(service: AccountService,
              route: ActivatedRoute,
              router: Router,
              breadcrumbService: BreadcrumbService,
              notificationService: NotificationService,
              protected _auth: AuthService,
              protected _userPictureService: UserPictureService) {
    super(service, route, router, breadcrumbService, notificationService);

    this._returnPath = '';
  }

  public ngOnInit() {
    this._id = this._auth.user.id;
    this._update();
  }

  protected _update() {
    super._update();
    this._loadUserPicture();
  }

  protected _loadUserPicture() {
    this._isImageLoading = true;
    this._userPictureService.getPicture(this._id).subscribe(pic => {
        this._createImageFromBlob(pic);
        this._isImageLoading = false;
      });
  }

  protected _createImageFromBlob(image: Blob): any {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this._avatar = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
