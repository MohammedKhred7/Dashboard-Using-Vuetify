/// <reference types="google.maps" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<google.maps.MarkerOptions>;
        required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<google.maps.MarkerOptions>;
        required: true;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
