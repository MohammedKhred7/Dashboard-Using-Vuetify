/// <reference types="google.maps" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<google.maps.CircleOptions>;
        required: true;
    };
}, {
    circle: import("vue").Ref<google.maps.Circle | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<google.maps.CircleOptions>;
        required: true;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
