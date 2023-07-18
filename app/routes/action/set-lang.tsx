import { json } from '@remix-run/cloudflare';
import type { ActionFunction } from '@remix-run/cloudflare';
import { getInfosSession } from '~/utils/cookies.server';
import { isLang } from '~/utils/lang-provider';

export const action: ActionFunction = async ({ request }) => {
  const langSession = await getInfosSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const lang = form.get('lang');

  if (!isLang(lang)) {
    return json({
      success: false,
      message: `theme value of ${lang} is not a valid theme`,
    });
  }

  langSession.setLang(lang);
  return json({ success: true }, { headers: { 'Set-Cookie': await langSession.commit() } });
};