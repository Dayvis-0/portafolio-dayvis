import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { AboutMe } from './pages/about-me/about-me';
import { Studies } from './pages/studies/studies';
import { Gallery } from './pages/gallery/gallery';
import { Tools } from './pages/tools/tools';
import { Hobbies } from './pages/hobbies/hobbies';
import { Gaming } from './pages/hobbies/gaming/gaming';
import { Reading } from './pages/hobbies/reading/reading';
import { Meals } from './pages/hobbies/meals/meals';
import { TimeLine } from './pages/time-line/time-line';

export const routes: Routes = [
    {path: '', component : Home },
    {path: 'about-me', component : AboutMe },
    {path: 'studies', component : Studies },
    {path: 'contact', component : Contact },
    {path: 'gallery', component : Gallery },
    {path: 'tools', component : Tools },
    {path: 'hobbies', component : Hobbies },
    {path: 'gaming', component : Gaming },
    {path: 'reading', component : Reading },
    {path: 'meals', component : Meals },
    {path: 'time-line', component : TimeLine },
    {path: '**', redirectTo: ''}
];
