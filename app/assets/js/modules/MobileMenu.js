import $ from 'jquery';

export default class MobileMenu {
    constructor() {
        this.menu = $('.header__menu-icon');
        this.content = $('.header__menu-contnet');
        this.container = $('.header');

        this.events();
    }

    events() {
        this.menu.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.content.toggleClass("header__menu-contnet--visible");
        this.container.toggleClass("header--expanded");
        this.menu.toggleClass("header__menu-icon--close");
    }
}
