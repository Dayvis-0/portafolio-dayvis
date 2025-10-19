import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { AboutMe } from './pages/about-me/about-me';
import { Studies } from './pages/studies/studies';
import { Tools } from './pages/tools/tools';
import { TimeLine } from './pages/time-line/time-line';

export const routes: Routes = [
    {path: '', component : Home, title: 'Dayvis Atao - Portafolio' },
    {path: 'about-me', component : AboutMe, title: 'Sobre mí - Dayvis Atao' },
    {path: 'studies', component : Studies, title: 'Estudios - Dayvis Atao' },
    {path: 'contact', component : Contact, title: 'Contacto - Dayvis Atao' },
    {path: 'tools', component : Tools, title: 'Herramientas - - Dayvis Atao' },
    {path: 'time-line', component : TimeLine, title: 'Linea de tiempo - Dayvis Atao' },
    {path: '**', redirectTo: ''}
];
