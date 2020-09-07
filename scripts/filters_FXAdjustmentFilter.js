export class FXAdjustmentFilter extends PIXI.filters.AdjustmentFilter {
    constructor(options) {
        super();

        if( typeof options == "undefined" ){
            options = {};
        }

        this.options = options;
        this.gamma = options.hasOwnProperty("gamma") ? options.gamma : 1;
        this.saturation = options.hasOwnProperty("saturation") ? options.saturation : 1;
        this.contrast = options.hasOwnProperty("contrast") ? options.contrast : 1;
        this.brightness = options.hasOwnProperty("brightness") ? options.brightness : 1;
        this.red = options.hasOwnProperty("red") ? options.red : 1;
        this.green = options.hasOwnProperty("green") ? options.green : 1;
        this.blue = options.hasOwnProperty("blue") ? options.blue : 1;
        this.alpha = options.hasOwnProperty("alpha") ? options.alpha : 1;
        this.enabled = false;
        this.skipFading = false;
    }

    static get label() {
        return "Adjustment";
    }

    step() {
    }

    play() {
        this.enabled = true;
    }

    configure(opts) {}

    // So we can destroy object afterwards
    stop() {
        return new Promise((resolve, reject) => {
            this.enabled = false;
            resolve();
        });
    }
}
