import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

export default class RevealOnScroll {
    constructor(item, offset) {
        this.items = $(item);
        this.offset = offset;
        this.hide();
        this.createWaypoints();
    }

    hide() {
        this.items.addClass("reveal-item");
    }

    createWaypoints() {
        const that = this;
        this.items.each((ind, item) => {
            new Waypoint({
                element: item,
                handler: () => {
                    $(item).addClass("reveal-item--visible");
                },
                offset: that.offset
            });
        });
    }
}
