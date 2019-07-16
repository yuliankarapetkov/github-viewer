import { Component, OnInit } from '@angular/core';

import { Repository } from '../../models';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    item: Repository = {
        id: '123',
        title: 'mozzila/sth',
        description: 'mozzila descr',
        starsCount: 123,
        language: 'JavaScript'
    };

    constructor() { }

    ngOnInit(): void {
    }

    removeRepository(repository: Repository): void {
        console.log('remove', repository);
    }
}
