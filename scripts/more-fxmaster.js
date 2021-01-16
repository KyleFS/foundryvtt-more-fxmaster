import { filterManager } from "../../fxmaster/filters/FilterManager.js";
import { FXCanvasAnimation } from "../../fxmaster/module/canvasanimation.js"
import { easeFunctions } from "../../fxmaster/module/ease.js";

import { FXGodrayFilter } from "./filters_FXGodrayFilter.js";
import { FXFlexBloomFilter } from "./filters_FXFlexBloomFilter.js";
import { FXNoiseFilter } from "./filters_FXNoiseFilter.js";
import { FXAdjustmentFilter } from "./filters_FXAdjustmentFilter.js";

Hooks.on("init", () => {
    // Adding filters and effects
    mergeObject(CONFIG.fxmaster, {
        filters: {
            godray: FXGodrayFilter,
            flexbloom: FXFlexBloomFilter,
            noise: FXNoiseFilter,
            adjustment: FXAdjustmentFilter,
        }
    });
});

Hooks.on("mfxReset", () => {
    filterManager.clear();
    filterManager.removeAll();

    canvas.scene.unsetFlag("fxmaster", "effects");
    canvas.scene.unsetFlag("fxmaster", "filters");
});



class overLayer extends PlaceablesLayer {
    constructor() {
        super();
        this.effects = {};
        this.weather = null;
        this.specials = [];
    }

    static get layerOptions() {
        return mergeObject(super.layerOptions, {
            canDragCreate: false,
            zIndex: 190
        });
    }

    activate() {
        // Skipping Placeable Layers activate method
        // super.activate();
        CanvasLayer.prototype.activate.apply(this)
        return this
    }

    deactivate() {
        // Skipping Placeable Layers deactivate method
        // super.deactivate();
        CanvasLayer.prototype.deactivate.apply(this)
        return this
    }

    async draw() {
        super.draw();
    }
}