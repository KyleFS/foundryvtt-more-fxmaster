export class FXNoiseFilter extends PIXI.filters.OldFilmFilter {
  constructor(options) {
    super();

    if( typeof options == "undefined" ){
      options = {};
    }

    this.enabled = false;
    this.sepia = options.hasOwnProperty("sepia") ? options.sepia : 0;
    this.noise = options.hasOwnProperty("noise") ? options.noise : 0.2;
    this.noiseSize = options.hasOwnProperty("noiseSize") ? options.noiseSize : 1.4;
    this.scratch = options.hasOwnProperty("scratch") ? options.scratch : 0;
    this.scratchDensity = options.hasOwnProperty("scratchDensity") ? options.scratchDensity : 0;
    this.scratchWidth = options.hasOwnProperty("scratchWidth") ? options.scratchWidth : 1;
    this.vignetting = options.hasOwnProperty("vignetting") ? options.vignetting : 0;
    this.vignettingAlpha = options.hasOwnProperty("vignettingAlpha") ? options.vignettingAlpha : 0;
    this.vignettingBlur = options.hasOwnProperty("vignettingBlur") ? options.vignettingBlur : 0;
    this.play();
  }

  static get label() {
    return "Noise";
  }

  play() {
    this.enabled = true;
    this.seed = Math.random();
  }

  step() {
    this.seed = Math.random();
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
