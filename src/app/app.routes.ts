import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { GroupsPage } from './pages/groups/groups';
import { RegisterPage } from './pages/register-page/register-page';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';

export const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "register",
    component: RegisterPage,
    canActivate: [onlyPublicUserGuard]
  },
  {
    path: "",
    component: LoggedLayout,
    canActivate: [onlyLoggedUserGuard],
    children: [
      {
        path: "",
        component: ContactsPage
      },
      {
        path: "contacts/:id",
        component: ContactDetailsPage
      },
      {
        path: "contacts/:idContacto/edit",
        component: NewEditContact
      },
      {
        path: "contacts/new",
        component: NewEditContact
      },
      {
        path: "groups",
        component: GroupsPage
      },
    ]
  },

];
