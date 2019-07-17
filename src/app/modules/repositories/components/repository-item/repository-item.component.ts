import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Repository } from './../../models/repository';

@Component({
    selector: 'app-repository-item',
    templateUrl: './repository-item.component.html',
    styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {
    @Input() item: Repository;
    @Input() hasRemoveButton = false;

    @Output() removed = new EventEmitter<Repository>();

    constructor() { }

    ngOnInit(): void {
    }

    remove(): void {
        this.removed.emit(this.item);
    }
}
