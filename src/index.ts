import { ref } from "vue";

export default (val) => {
    const el = ref(val);
    return {
        ref: el,
        get value() {
            return el.value;
        },
        set value(next) {
            el.value = next;
        },
        toString() {
            return this.value;
        },
    };
};
