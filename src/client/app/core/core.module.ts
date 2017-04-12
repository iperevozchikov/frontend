import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { UserService } from './services/user.service';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginPanelComponent } from './components/login/login-panel.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AccountService } from './services/account.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    LanguageSelectorComponent,
    SidebarNavComponent,
    BreadcrumbComponent,
    FooterComponent,
    LoginPanelComponent,
    LayoutComponent
  ],
  providers: [
    UserService,
    AuthService,
    AccountService,
    AuthGuard
  ],
  exports: [
    HeaderComponent,
    LanguageSelectorComponent,
    SidebarNavComponent,
    BreadcrumbComponent,
    FooterComponent,
    LoginPanelComponent,
    LayoutComponent
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
