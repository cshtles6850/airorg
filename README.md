# Kayseri Airport to Cappadocia

Deploy-ready static website for Vercel.

## Included
- Home page
- 6 route pages
- Booking page with WhatsApp booking flow
- FAQ, About, Contact
- 3 transfer-focused blog articles
- Privacy and Terms
- robots.txt and sitemap.xml
- Route/service structured data
- Floating WhatsApp button
- Mobile fixed booking CTA

## Operator
Ekwo Travel & Outdoor Travel Agency
TURSAB No: 7896
WhatsApp: +90 545 932 00 50

## Important
No street address was added to structured data because no verified street address was supplied.


## Preview deployment indexing
Vercel preview deployments are expected to receive an X-Robots-Tag: noindex response header automatically. Before connecting the production domain, verify the preview response headers and verify that the production domain does not carry a preview-only noindex header. Canonicals in this build point to https://kayseriairporttocappadocia.com.


## Future Resend booking email integration
The booking form currently sends the completed request through WhatsApp only.

The project is intentionally prepared for a later Resend email workflow. Do not use the public contact email as the booking-recipient address automatically. The booking recipient will be supplied separately.

When the booking mailbox is provided, add a server-side endpoint such as `/api/booking` with:
- `RESEND_API_KEY`
- `BOOKING_TO_EMAIL`
- `BOOKING_FROM_EMAIL` (verified Resend sender/domain)

The browser form should POST the booking payload to the server-side endpoint. Never expose the Resend API key in `assets/site.js` or any client-side file.
