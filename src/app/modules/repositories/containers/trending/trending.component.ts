import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Repository } from '../../models';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
    item: Repository = {
        id: '123',
        title: 'mozzila/sth',
        description: 'mozzila descr',
        starsCount: 123,
        language: 'JavaScript'
    }

    constructor(
        private _router: Router
    ) { }

    ngOnInit(): void {
    }

    seeDetails(repository: Repository): void {
        this._router.navigate(['/', 'repositories', repository.id]);
    }
}
