import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import kontra from 'rollup-plugin-kontra';
// TODO : Enable this later when we want to optimize
// import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: {
    dir: './build',
    format: 'iife',
  },
  plugins: [
    serve(),
    livereload(),
    resolve({
      jsnext: true,
      browser: true,
      dedupe: ['kontra'],
    }),
    kontra({
      gameObject: {
        acceleration: true,
        anchor: true,
        camera: true,
        group: true,
        opacity: true,
        rotation: true,
        scale: true,
        ttl: true,
        velocity: true,
      },
      sprite: {
        animation: true,
        image: true,
        image: true,
      },
      text: {
        autoNewline: true,
        newline: true,
        textAlign: true,
      },
      vector: {
        angle: true,
        clamp: true,
        distance: true,
        dot: true,
        length: true,
        normalize: true,
        scale: true,
        subtract: true,
      },
      debug: true,
    }),
    commonjs(),
    typescript(),
  ],
};
