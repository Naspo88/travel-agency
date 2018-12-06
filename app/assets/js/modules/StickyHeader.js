import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

export default class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.header = $('.header');
        this.trigger = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.links = $('.primary-nav a');
        this.createHeaderWayPoint();
        this.createPageSectionWayPoint();
        this.addSmoothScroll();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', () => {
            Waypoint.refreshAll();
        });
    }

    addSmoothScroll() {
        this.links.smoothScroll();
    }

    createHeaderWayPoint() {
        const that = this;
        new Waypoint({
            element: that.trigger[0],
            handler: (dir) => {
                if (dir === 'down') {
                    that.header.addClass('header--darker');
                } else {
                    that.header.removeClass('header--darker');
                }
                
            }
        });
    }

    createPageSectionWayPoint() {
        const that = this;
        this.pageSections.each((ind, item) => {
            new Waypoint({
                element: item,
                handler: (dir) => {
                    if (dir === 'down') {
                        const matchLink = item.getAttribute('data-match');
                        that.links.removeClass('current-link');
                        $(matchLink).addClass('current-link');
                    }
                },
                offset: '18%'
            });

            new Waypoint({
                element: item,
                handler: (dir) => {
                    if (dir === 'up') {
                        const matchLink = item.getAttribute('data-match');
                        that.links.removeClass('current-link');
                        $(matchLink).addClass('current-link');
                    }
                },
                offset: '-40%'
            });
        });
    }
}
