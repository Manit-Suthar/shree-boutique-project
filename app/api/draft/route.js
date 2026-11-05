import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') || '/';
  
  const expectedSecret = process.env.SANITY_PREVIEW_SECRET || 'preview123';
  if (secret !== expectedSecret) {
    return new Response('Invalid token', { status: 401 });
  }

  // Enable Draft Mode by setting the cookie (async in Next.js 15+)
  const draft = await draftMode();
  draft.enable();

  // Redirect to the home page or specific path
  redirect(slug);
}
