export class FXGodrayFilter extends PIXI.filters.GodrayFilter {
  constructor(options) {
    super();

    if( typeof options == "undefined" ){
      options = {};
    }

    this.enabled = false;
    this.angle = options.hasOwnProperty("angle") ? options.angle : 30;
    this.gain = options.hasOwnProperty("gain") ? options.gain :0.35;
    this.lacunarity = options.hasOwnProperty("lacunarity") ? options.lacunarity :2.55;
    this.time = 0;
    this.speed = options.hasOwnProperty("speed") ? options.speed : 100;
    this.parallel = true;
    this.center = [0, 0];
    this.play();
  }

  static get label() {
    return "Godray";
  }

  play() {
    this.clearTokenFilter();

    this.enabled = true;
  }

  step() {
    this.clearTokenFilter();

    this.time = canvas.app.ticker.lastTime / this.speed;
  }

  clearTokenFilter() {
    if(typeof canvas.tokens.filters == "undefined" || canvas.tokens.filters == null){
      return;
    }

    let tokenFilters = canvas.tokens.filters, outputFilters = canvas.tokens.filters;

    for(let i = 0; i < tokenFilters.length; i++){
      if( !(tokenFilters[i] instanceof FXGodrayFilter) ){
        continue;
      }

      outputFilters.splice(i, 1);
    }

    canvas.tokens.filters = outputFilters;
  }

  configure(opts) {
    if (!opts) return;
    const keys = Object.keys(opts);
    for (let i = 0; i < keys.length; ++i) {
      this[keys[i]] = opts[keys[i]];
    }
    this.play();
  }

  // So we can destroy object afterwards
  stop() {
    return new Promise((resolve, reject) => {
      this.enabled = false;
      resolve();
    });
  }
}