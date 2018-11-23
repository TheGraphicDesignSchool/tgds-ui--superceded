import {_flatten} from "./index";

const BASE = 16;

const calc = (base, ...values) =>
    _flatten( values.map(value => String(value).split(/\s/gim)) )
        .map( value => `${Number(value.replace('px', '')) / base}rem` )
        .join(' ');

export default (...values) => calc(BASE, ...values);
export const withBase = calc;
