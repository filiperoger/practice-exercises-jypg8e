import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['The Incredibles', 'The Manchurian Candidate', 'Oceans 8', 'The Princess Bride'];

  constructor() { }

  ngOnInit() {
  }

}