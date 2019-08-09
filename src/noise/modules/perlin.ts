import { NoiseQuality, GradientCoherentNoise3D, MakeInt32Range } from "./noisegen.js";

/**
 * Noise module that outputs 3-dimensional Perlin noise.
 */
export class Perlin
{

    /**
     * Default frequency for the Perlin noise module.
     */
    static DEFAULT_PERLIN_FREQUENCY = 1.0;

    /**
     * Default lacunarity for the Perlin noise module.
     */
    static DEFAULT_PERLIN_LACUNARITY = 2.0;

    /**
     * Default number of octave for the Perlin noise module.
     */
    static DEFAULT_PERLIN_OCTAVE_COUNT = 6;

    /**
     * Default persistence for the Perlin noise module.
     */
    static DEFAULT_PERLIN_PERSISTENCE = 0.5;

    /**
     * Default noise quality for the Perlin noise module.
     */
    static DEFAULT_PERLIN_QUALITY = NoiseQuality.QUALITY_STD;

    /**
     * Default noise seed for the Perlin noise module.
     */
    static DEFAULT_PERLIN_SEED = 0;

    /**
     * Maximum number of octaves.
     */
    static PERLIN_MAX_OCTAVE = 600;

    /**
     * The frequency of the first octave
     */
    private frequency: number;

    /**
     * The lacunarity between successive octaves
     */
    private lacunarity: number;

    /**
     * The quality of the noise
     */
    private noiseQuality: NoiseQuality;

    /**
     * The number of octaves
     */
    private octaveCount: number;

    /**
     * The persistence of the noise
     */
    private persistence: number;

    /**
     * The random seed
     */
    private seed: number

    /**
     * Constructor for Class Perlin.
     * @constructor
     * @param frequency - The frequency of the first octave
     * @param lacunarity - The lacunarity between successive octaves
     * @param noiseQuality - The quality of the noise
     * @param octaveCount - The number of octaves
     * @param persistence - The persistence of the noise
     * @param seed - The random seed
     */
    constructor(frequency?: number, lacunarity?: number, noiseQuality?: NoiseQuality, octaveCount?: number, persistence?: number, seed?: number)
    {
        this.frequency = frequency | Perlin.DEFAULT_PERLIN_FREQUENCY;
        this.lacunarity = lacunarity | Perlin.DEFAULT_PERLIN_LACUNARITY;
        this.noiseQuality = noiseQuality | Perlin.DEFAULT_PERLIN_QUALITY;
        this.octaveCount = octaveCount | Perlin.DEFAULT_PERLIN_OCTAVE_COUNT
        this.persistence = persistence | Perlin.DEFAULT_PERLIN_PERSISTENCE;
        this.seed = seed | Perlin.DEFAULT_PERLIN_SEED;
    }

    /**
     * Calculates noise value at coordinate `x`, `y`, `z`
     * @param x - The `x` coordinate to be calculated
     * @param y - The `y` coordinate to be calculated
     * @param z - The `z` coordinate to be calculated
     * @returns - Value of the noise at coordinate `x`, `y`, `z`
     */
    public getValue(x: number, y: number, z: number): number
    {
        let value = 0.0;
        let signal = 0.0;
        let curPersistence = 1.0;
        let nx, ny, nz;
        let seed: number;

        x *= this.frequency;
        y *= this.frequency;
        z *= this.frequency;

        for (let curOctave = 0; curOctave < this.octaveCount; curOctave++)
        {

            nx = MakeInt32Range(x);
            ny = MakeInt32Range(y);
            nz = MakeInt32Range(z);

            seed = (this.seed + curOctave) & 0xffffffff;
            signal = GradientCoherentNoise3D(nx, ny, nz, seed, this.noiseQuality);
            value += signal * curPersistence;

            x *= this.lacunarity;
            y *= this.lacunarity;
            z *= this.lacunarity;
            curPersistence *= this.persistence;
        }

        return value;
    }


}