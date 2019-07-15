import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
    item: Repository = {
        title: 'mozzila/sth',
        description: 'mozzila descr',
        starsCount: 123,
        language: 'JavaScript'
    }

    constructor() { }

    ngOnInit(): void {
    }
}
