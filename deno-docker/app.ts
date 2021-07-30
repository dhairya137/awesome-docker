const server = Deno.listen({ port: 8000 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);

for await (const conn of server) {
  (async () => {
    const httpConn = Deno.serveHttp(conn);

    for await (const requestEvent of httpConn) {
      const body = `Hello World`;

      requestEvent.respondWith(
        new Response(body, {
          status: 200,
        })
      );
    }
  })();
}
