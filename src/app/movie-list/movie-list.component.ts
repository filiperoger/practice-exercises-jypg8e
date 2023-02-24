import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies = [
    { title: 'The Incredibles' },
    { title: 'The Manchurian Candidate' },
    { title: 'Oceans 8' },
    { title: 'rosh' },
  ];

  constructor() {}

  ngOnInit() {}
}
