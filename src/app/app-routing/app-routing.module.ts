import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoresListComponent } from '../chores-list/chores-list.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { PageTitleComponent } from '../page-title/page-title.component';

const routes: Routes = [
  { path: 'page-title', component: PageTitleComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'chores-list', component: ChoresListComponent },
  { path: '**', redirectTo: '/page-title' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
