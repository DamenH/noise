
export function CubicInterp(n0: number, n1: number, n2: number, n3: number, a: number): number
{
    let p = (n3 - n2) - (n0 - n1);
    let q = (n0 - n1) - p;
    let r = n2 - n0;
    let s = n1;
    return p * a * a * a + q * a * a + r * a + s;
}

export function LinearInterp(n0: number, n1: number, a: number)
{
    return ((1.0 - a) * n0) + (a * n1);
}

export function SCurve3(a: number)
{
    return (a * a * (3.0 - 2.0 * a));
}

export function SCurve5(a: number)
{
    let a3 = a * a * a;
    let a4 = a3 * a;
    let a5 = a4 * a;
    return (6.0 * a5) - (15.0 * a4) + (10.0 * a3);
}