import $ from 'jquery';

export default class Model {
    constructor() {
        this.open = $('.open-model');
        this.model = $('.model');
        this.close = $('.model__close');
        this.events();
    }

    events() {
        this.open.click(this.openModel.bind(this));
        this.close.click(this.closeModel.bind(this));
        $(document).keyup(this.keyPress.bind(this));
    }

    keyPress(e) {
        if (e.keyCode === 27) {
            this.closeModel();
        }
    }

    openModel() {
        this.model.addClass('model--visible');
        return false;
    }

    closeModel() {
        this.model.removeClass('model--visible');
        return false;
    }
}
