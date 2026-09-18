# Production deployment checklist

Primary domain: `https://kayseriairporttocappadocia.com`

This build does **not** redirect `airorg.vercel.app`.
That host is treated only as a temporary test site.

This build also does **not** contain a custom www redirect.
Configure the preferred non-www production domain using Vercel's domain settings.

After connecting the production domain in Vercel:

1. Set `kayseriairporttocappadocia.com` as the production/primary domain.
2. Configure `www.kayseriairporttocappadocia.com` in Vercel to redirect to the non-www domain.
3. Wait for Vercel to issue the HTTPS certificate.
4. Verify:
   - `https://kayseriairporttocappadocia.com/` → 200
   - `/robots.txt` → 200
   - `/sitemap.xml` → 200
   - canonical, og:url and JSON-LD use the production domain
5. Submit only the production sitemap to Search Console.

Blog status:
- Blog pages remain `noindex`.
- Blog URLs are excluded from the sitemap.
