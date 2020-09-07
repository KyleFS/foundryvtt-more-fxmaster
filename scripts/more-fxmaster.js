import { FXGodrayFilter } from "./filters_FXGodrayFilter.js";

Hooks.on("init", () => {
    // Adding filters and effects
    mergeObject(CONFIG.fxmaster, {
        filters: {
            godray: FXGodrayFilter,
        }
    });
});

Hooks.on('switchFilter', () => {
    canvas.tokens.filters = [];
});