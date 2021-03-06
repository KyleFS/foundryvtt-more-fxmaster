export class FXFlexBloomFilter extends PIXI.filters.AdvancedBloomFilter {
  constructor(options) {
    super();

    if( typeof options == "undefined" ){
      options = {};
    }

    this.enabled = false;
    this.skipFading = options.hasOwnProperty("skipFading") ? options.skipFading : false;
    this.threshold = options.hasOwnProperty("threshold") ? options.threshold : 1.0;
    this.bloomScale = options.hasOwnProperty("") ? options.bloomScale : 0.5;
    this.blur = options.hasOwnProperty("blur") ? options.blur : 10;
    this._step = 0;
    this._bloomRange = [0.52, 0.54, 0.54, 0.56, 0.52, 0.51, 0.50, 0.49, 0.5, 0.51];
    this.play();
  }

  static get label() {
    return "FlexBloom";
  }

  play() {
    this.enabled = true;
    if (this.skipFading) {
      this.skipFading = false;
      this.threshold = 0.0;
      return;
    }
    let anim = {
      ease: Linear.easeNone,
      repeat: 0,
      threshold: 0.0,
    };
    this.transition = TweenMax.to(this, 4, anim);
  }

  step() {
    this._step++;
    if (this._step % 5) return;
    this.blur = 10 + 5 * this._bloomRange[(this._step / 5) % 10];
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
      if (this.skipFading) {
        this.skipFading = false;
        this.enabled = false;
        this.threshold = 1.0;
        resolve();
        return;
      }
      let anim = {
        ease: Linear.easeNone,
        repeat: 0,
        threshold: 1.0,
        onComplete: () => {
          this.enabled = false;
          resolve();
        }
      };
      this.transition = TweenMax.to(this, 4, anim);
    });
  }
}