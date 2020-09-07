import { filterManager } from "../../fxmaster/filters/FilterManager.js";

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
