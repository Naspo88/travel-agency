import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class RevealOnScroll {
    constructor() {
        this.items = $('.feature-item');
        this.hide();
        this.createWaypoints();
    }

    hide() {
        this.items.addClass("reveal-item");
    }

    createWaypoints() {
        this.items.each((ind, item) => {
            new Waypoint({
                element: item,
                handler: () => {
                    $(item).addClass("reveal-item--visible");
                },
                offset: '85%'
            });
        });
    }
}
