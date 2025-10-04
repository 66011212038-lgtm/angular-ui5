import { Routes } from '@angular/router';
import { Order } from './components/order/order';
//import { Detall } from './components/detall/detall';
// import { Library } from './components/library/library';
 //import { ProfileUser } from './components/profile-user/profile-user';
 //import { ProfileAdmin } from './components/profile-admin/profile-admin';
//import { Homepage } from './components/homepage/homepage';
//import { EditProfile } from './components/edit-profile/edit-profile';

export const routes: Routes = [
    //  {path: '', component: ProfileUser},
     //{path: 'profile_admin', component: ProfileAdmin},
       //{path: '', component: Homepage},
    //    {path: 'edit_profile', component: EditProfile},
    //    {path: '', component: Library},
    //{path: '', component: Detall},
    {path: '', component: Order},
];
