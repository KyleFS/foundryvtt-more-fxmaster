import { filterManager } from "../../fxmaster/filters/FilterManager.js";

import { FXGodrayFilter } from "./filters_FXGodrayFilter.js";
import { FXFlexBloomFilter } from "./filters_FXFlexBloomFilter.js";
import { FXNoiseFilter } from "./filters_FXNoiseFilter.js";

Hooks.on("init", () => {
    // Adding filters and effects
    mergeObject(CONFIG.fxmaster, {
        filters: {
            godray: FXGodrayFilter,
            flexbloom: FXFlexBloomFilter,
            noise: FXNoiseFilter,
        }
    });
});

Hooks.on("mfxReset", () => {
    filterManager.clear();
    filterManager.removeAll();

    canvas.scene.unsetFlag("fxmaster", "effects");
    canvas.scene.unsetFlag("fxmaster", "filters");
});
