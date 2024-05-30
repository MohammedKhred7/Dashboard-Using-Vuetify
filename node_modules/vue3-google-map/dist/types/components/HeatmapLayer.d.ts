/// <reference types="google.maps" />
import { PropType } from "vue";
type HeatmapLayerOptions = google.maps.visualization.HeatmapLayerOptions;
interface ExtendedHeatmapLayerOptions extends Omit<HeatmapLayerOptions, "data"> {
    data: HeatmapLayerOptions["data"] | (google.maps.LatLngLiteral | {
        location: google.maps.LatLngLiteral;
    })[];
}
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<ExtendedHeatmapLayerOptions>;
        default: () => {};
    };
}, {
    heatmapLayer: import("vue").Ref<google.maps.visualization.HeatmapLayer | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<ExtendedHeatmapLayerOptions>;
        default: () => {};
    };
}>>, {
    options: ExtendedHeatmapLayerOptions;
}, {}>;
export default _default;
