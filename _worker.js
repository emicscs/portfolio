export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve static assets from /_next/static/
    if (url.pathname.startsWith('/_next/static/')) {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set('cache-control', 'public, max-age=31536000, immutable');
        return new Response(response.body, {
          ...response,
          headers,
        });
      }
      return response;
    }

    // Serve public files from /public/
    if (url.pathname.startsWith('/public/')) {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set('cache-control', 'public, max-age=31536000, immutable');
        return new Response(response.body, {
          ...response,
          headers,
        });
      }
      return response;
    }

    // Fallback to serving as static HTML
    try {
      const response = await env.ASSETS.fetch(request);
      return response;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
}; 