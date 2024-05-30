/// <reference types="google.maps" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<google.maps.InfoWindowOptions>;
        default: () => {};
    };
    modelValue: {
        type: BooleanConstructor;
    };
}, {
    infoWindow: import("vue").Ref<google.maps.InfoWindow | undefined>;
    infoWindowRef: import("vue").Ref<HTMLElement | undefined>;
    hasSlotContent: import("vue").ComputedRef<boolean | undefined>;
    open: (opts?: google.maps.InfoWindowOpenOptions) => void;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<google.maps.InfoWindowOptions>;
        default: () => {};
    };
    modelValue: {
        type: BooleanConstructor;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    options: google.maps.InfoWindowOptions;
    modelValue: boolean;
}, {}>;
export default _default;
