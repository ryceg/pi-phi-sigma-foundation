import type { EasingFunction } from "svelte/types/runtime/transition";
import { quartIn } from "svelte/easing";
export function swipe(node: Element, params?: Partial<{
    getBackground?: boolean
    duration: number
    delay: number
    easing: EasingFunction
}>) {
    const { duration, delay, easing = quartIn} = params || {};
    const { backgroundColor } = window.getComputedStyle(node);
    return {
        duration,
        delay,
        easing,
        css(t: number) {
            if (t > 0.5) {
                // transform t from range [0.5, 1] into percentage [0, 100]
                // t: 0.5 -> 1
                // u: 0 -> 0.5
                const u = t - 0.5;
                // percentage: 0 -> 100
                const percentage = u * 200;
                return `background: linear-gradient(to right, ${backgroundColor} 0, ${percentage}%, ${backgroundColor} ${percentage}%);`;
            } else {
                // transform t from range [0, 0.5] into percentage [0, 100]
                // t: 0 -> 0.5
                // percentage: 0 -> 100
                const percentage = t * 200;
                return `background: linear-gradient(to right, ${backgroundColor} 0, ${percentage}%, transparent ${percentage}%);`;
            }
        },
    };
}