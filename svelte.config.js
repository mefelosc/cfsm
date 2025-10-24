import adapter from '@sveltejs/adapter-static';

const isProd = process.env.NODE_ENV === 'production';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: isProd ? '/cfsm' : ''
    }
  }
};
