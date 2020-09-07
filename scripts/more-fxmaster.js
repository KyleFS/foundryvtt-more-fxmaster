import { FXGodrayFilter } from "filters_FXGodrayFilter.js";

Hooks.on("init", () => {
    console.log('morefx init');
    // Adding filters and effects
    mergeObject(CONFIG.fxmaster, {
        filters: {
            godray: FXGodrayFilter,
        }
    });
});
