import { Routes } from '@angular/router';
import { Wallet } from './components/wallet/wallet';
// import { EditGame } from './components/edit-game/edit-game';
// import { Trolley } from './components/trolley/trolley';
//import { Order } from './components/order/order';
// import { Detall } from './components/detall/detall';
// import { Library } from './components/library/library';
 //import { ProfileUser } from './components/profile-user/profile-user';
import { Member } from './components/member/member';
import { Coupon } from './components/coupon/coupon';
 //import { ProfileAdmin } from './components/profile-admin/profile-admin';
import { Homepage } from './components/homepage/homepage';
import { ProfileUser } from './components/profile-user/profile-user';
//import { EditProfile } from './components/edit-profile/edit-profile';

export const routes: Routes = [
     //{path: '', component: ProfileUser},
     //{path: 'profile_admin', component: ProfileAdmin},
      //{path: '', component: Homepage},
        //{path: '', component: EditProfile},
    //    {path: '', component: Library},
    // {path: '', component: Detall},
    // {path: '', component: Order},
    // {path: '', component: EditGame},
    // {path: '', component: Trolley},
     //{path: '', component: Wallet},
     {path: '', component: Member},
    //{path: '', component: Coupon},
];
