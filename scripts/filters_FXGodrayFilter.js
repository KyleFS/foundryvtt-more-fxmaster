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
    this.time = options.hasOwnProperty("time") ? options.time : 0;
    this.parallel = options.hasOwnProperty("parallel") ? options.parallel : true;
    this.center = [0, 0];
    this.play();
  }

  static get label() {
    return "Godray";
  }

  play() {
    this.enabled = true;
    this.seed = Math.random();
  }

  step() {
    this.seed += 1;
    this.time = canvas.app.ticker.lastTime / 1000;
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
