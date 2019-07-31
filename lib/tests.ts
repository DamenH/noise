import { Perlin } from "./noise/perlin.js";
import { CubicInterp, LinearInterp, SCurve3, SCurve5 } from "./noise/interp.js";
import { GradientCoherentNoise3D, GradientNoise3D, IntValueNoise3D, ValueCoherentNoise3D, ValueNoise3D, MakeInt32Range, fmod } from "./noise/noisegen.js";

export class NoiseTestRunner
{
    static runTests(): any
    {
        let testResults = {

            PerlinGetValueTest: false,

            InterpCubicInterpTest: false,
            InterpLinearInterpTest: false,
            InterpSCurve3Test: false,
            InterpSCurve5Test: false,

            NoiseGenGradientCoherentNoise3DTest: false,
            NoiseGenGradientNoise3DTest: false,
            NoiseGenIntValueNoise3DTest: false,
            NoiseGenValueCoherentNoise3DTest: false,
            NoiseGenValueNoise3DTest: false,
            NoiseGenMakeInt32RangeTest: false,
            NoiseGenFmodTest: false,

        }

        testResults.PerlinGetValueTest = PerlinGetValueTest();
        testResults.InterpCubicInterpTest = InterpCubicInterpTest();
        testResults.InterpLinearInterpTest = InterpLinearInterpTest();
        testResults.InterpSCurve3Test = InterpSCurve3Test();
        testResults.InterpSCurve5Test = InterpSCurve5Test();
        testResults.NoiseGenGradientCoherentNoise3DTest = NoiseGenGradientCoherentNoise3DTest();
        testResults.NoiseGenGradientNoise3DTest = NoiseGenGradientNoise3DTest();
        testResults.NoiseGenIntValueNoise3DTest = NoiseGenIntValueNoise3DTest();
        testResults.NoiseGenValueCoherentNoise3DTest = NoiseGenValueCoherentNoise3DTest();
        testResults.NoiseGenValueNoise3DTest = NoiseGenValueNoise3DTest();
        testResults.NoiseGenMakeInt32RangeTest = NoiseGenMakeInt32RangeTestTest();
        testResults.NoiseGenFmodTest = NoiseGenFmodTest();

        return testResults;

    }
}


function PerlinGetValueTest(): boolean
{
    let value = new Perlin().getValue(.1, .1, .1);
    return value === -0.21409120458204292;
}

function InterpCubicInterpTest(): boolean
{
    let value = CubicInterp(.1, .2, .3, .4, .5);
    return value === 0.25;
}

function InterpLinearInterpTest(): boolean
{
    let value = LinearInterp(.1, .2, .3);
    return value === 0.13;
}

function InterpSCurve3Test(): boolean
{
    let value = SCurve3(.1);
    return value === 0.028000000000000004;
}

function InterpSCurve5Test(): boolean
{
    let value = SCurve5(.1);
    return value === 0.008560000000000002;
}

function NoiseGenGradientCoherentNoise3DTest(): boolean
{
    let value = GradientCoherentNoise3D(.1, .1, .1, 0, 2)
    return value === -0.30047890633885405;
}

function NoiseGenGradientNoise3DTest(): boolean
{
    let value = GradientNoise3D(.1, .2, .3, .4, .5, .6, 0);
    return value === 0.02952121199999999;
}

function NoiseGenIntValueNoise3DTest(): boolean
{
    let value = IntValueNoise3D(.1, .1, .1, 0);
    return value === 682247797;
}

function NoiseGenValueCoherentNoise3DTest(): boolean
{
    let value = ValueCoherentNoise3D(.1, .1, .1, 0, 2);
    return value === -0.27336005573119776;
}

function NoiseGenValueNoise3DTest(): boolean
{
    let value = ValueNoise3D(.1, .1, .1, 0);
    return value === 0.36460722517222166;
}

function NoiseGenMakeInt32RangeTestTest(): boolean
{
    let value = MakeInt32Range(9930960456);
    return value === -539173744;
}

function NoiseGenFmodTest(): boolean
{
    let value = fmod(.275, .123);
    return value === 0.029;
}

