import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Studies } from './pages/studies/studies';
import { Gallery } from './pages/gallery/gallery';
import { Tools } from './pages/tools/tools';
import { Hobbies } from './pages/hobbies/hobbies';
import { Gaming } from './pages/gaming/gaming';
import { AboutMe } from './components/about-me/about-me';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'about-me', component:AboutMe},
    {path: 'studies', component:Studies},
    {path: 'contact', component:Contact},
    {path: 'gallery', component:Gallery},
    {path: 'tools', component:Tools},
    {path: 'hobbies', component:Hobbies},
    {path: 'gaming', component:Gaming},
    {path: '**', redirectTo: ''}
];
