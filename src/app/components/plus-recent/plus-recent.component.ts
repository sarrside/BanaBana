import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { PlusRecentService } from 'src/app/services/plus-recent/plus-recent.service';

@Component({
  selector: 'app-plus-recent',
  templateUrl: './plus-recent.component.html',
  styleUrls: ['./plus-recent.component.sass']
})
export class PlusRecentComponent implements OnInit {

  plArticles: Article [];

  constructor(public plService: PlusRecentService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.plArticles);
  }

  getItems() {
    this.plService.getArticles().subscribe((data) => {
      this.plArticles = data;
      console.log(data);
    });
  }

}
