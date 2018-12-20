"use strict";

class GiftList {
    constructor(classmate) {
        this.classmate = classmate;
        this.selectable = [];
        this.selected = [];

        for (let i = 1; i <= this.classmate; i++) {
            let classNo = `61${ i.toString().padStart(2, '0') }`;
            this.selectable.push(classNo);
        }
    }

    next() {
        if ((this.selectable.length > 0) && (this.selected.length != this.classmate)) {
            let position = Utilities.random(0, this.selectable.length);
            let selected = ({
                gift: (this.selected.length + 1),
                classmate: this.selectable.splice(position, 1)[0]
            });

            this.selected.push(selected);
            return selected;
        } else {
            return null;
        }
    }
}
