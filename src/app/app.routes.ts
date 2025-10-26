import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { AboutMe } from './pages/about-me/about-me';
import { Studies } from './pages/studies/studies';
import { Gallery } from './pages/gallery/gallery';
import { Tools } from './pages/tools/tools';
import { Hobbies } from './pages/hobbies/hobbies';
import { Gaming } from './pages/gaming/gaming';
import { Reading } from './pages/reading/reading';
import { Meals } from './pages/meals/meals';
import { TimeLine } from './pages/time-line/time-line';

export const routes: Routes = [
    {path: '', component : Home, title: 'Dayvis Atao - Portafolio' },
    {path: 'about-me', component : AboutMe, title: 'Sobre mí - Dayvis Atao' },
    {path: 'contact', component : Contact, title: 'Contacto - Dayvis Atao' },
    {path: 'studies', component : Studies, title: 'Estudios - Dayvis Atao' },
    {path: 'gallery', component : Gallery, title: 'Galeria - Dayvis Atao' },
    {path: 'tools', component : Tools, title: 'Herramientas - Dayvis Atao' },
    {path: 'hobbies', component : Hobbies, title: 'Hobbies - Dayvis Atao' },
    {path: 'gaming', component : Gaming, title: 'Juegos - Dayvis Atao' },
    {path: 'reading', component : Reading, title: 'Lectura - Dayvis Atao' },
    {path: 'meals', component : Meals, title: 'Comidas - Dayvis Atao' },
    {path: 'time-line', component : TimeLine, title: 'Linea de tiempo - Dayvis Atao' },
    {path: '**', redirectTo: ''}
];
