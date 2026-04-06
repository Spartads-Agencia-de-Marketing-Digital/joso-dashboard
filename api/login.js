export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user, pass } = req.body || {};
  const validUser = process.env.AUTH_USER;
  const validPass = process.env.AUTH_PASS;

  if (user === validUser && pass === validPass) {
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ ok: false });
}
