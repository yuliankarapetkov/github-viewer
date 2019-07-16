import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'github-viewer';

    constructor(
        private _firestore: AngularFirestore
    ) {

    }

    ngOnInit(): void {
        // this._firestore.collection('test').add({ isSuccessful: true });
    }
}
