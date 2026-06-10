// Cloudflare Pages Function — recibe el POST del formulario de contacto.
// Vive fuera de /src: Cloudflare Pages detecta la carpeta functions/ sola.
// En local (astro dev) NO corre; se activa al desplegar en Cloudflare.

interface Env {
  // Configurar en Cloudflare → Settings → Environment variables.
  CONTACT_WEBHOOK_URL?: string;
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  const form = await request.formData();
  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();
  const honeypot = String(form.get('company') ?? '').trim();

  const back = new URL(request.headers.get('referer') ?? '/about/');

  // Honeypot relleno = bot. Respondemos OK pero descartamos el mensaje.
  if (honeypot) {
    back.searchParams.set('sent', '1');
    return Response.redirect(back.toString(), 303);
  }

  if (!name || !email || !message) {
    return new Response('Missing required fields', { status: 400 });
  }

  // --- Hook de integración futura (n8n / proveedor de email) ---
  // Definí CONTACT_WEBHOOK_URL en Cloudflare y el mensaje se reenvía ahí.
  if (env.CONTACT_WEBHOOK_URL) {
    await fetch(env.CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        source: 'visitilhagrande.com',
      }),
    });
  }

  back.searchParams.set('sent', '1');
  return Response.redirect(back.toString(), 303);
};
