import { Component, Input, ChangeDetectionStrategy }    from '@angular/core';
import { ContactStore, Contact as ContactModel}         from '../contact-store';

@Component({
    selector:       'contact-component',
    templateUrl :   'app/contact-component/contact.html',
    styleUrls:      ['app/contact-component/contact.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class ContactComponent {

    @Input()
    contact: ContactStore;

    constructor(private store: ContactStore) { }

    removeContact(contact) {
        this.store.removeContact(contact);
    }

    starContact(contact) {
        this.store.starContact(contact);
    }

}