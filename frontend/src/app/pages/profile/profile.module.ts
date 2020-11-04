import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';

@NgModule({
  declarations: [ProfileComponent, AccountComponent, NotificationsComponent, TransferMoneyComponent],
  imports: [ShareModule, ProfileRoutingModule],
})
export class ProfileModule {}
