import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Repository } from './../../models/repository';

@Component({
    selector: 'app-repository-item',
    templateUrl: './repository-item.component.html',
    styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {
    @Input() item: Repository;
    @Input() hasUnfavoriteButton = false;
    @Input() unfavoriteLoading = false;

    @Output() unfavorited = new EventEmitter<Repository>();

    constructor() { }

    ngOnInit(): void {
    }

    unfavorite(): void {
        this.unfavorited.emit(this.item);
    }
}
