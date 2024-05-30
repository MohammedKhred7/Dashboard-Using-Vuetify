import { PropType, Ref } from "vue";
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
        required: true;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
}, {
    controlRef: Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "content:loaded"[], "content:loaded", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
        required: true;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onContent:loaded"?: ((...args: any[]) => any) | undefined;
}, {
    index: number;
}, {}>;
export default _default;
