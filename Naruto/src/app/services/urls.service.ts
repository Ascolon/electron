import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  constructor() {}

  getGenres = 'http://localhost:51265/Film/GetAllGenre';
  getUpdate = 'http://localhost:51265/Film/GetLastAdded';
}
