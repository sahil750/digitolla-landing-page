import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitolla | Event hoo ya Social Media, Digitolla py sab set hai!</title>
        <meta name="description" content="Digitolla is your go-to creative agency for event coverage, social media management, video editing, and more!" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Digitolla",
          "url": "https://www.digitolla.com",
          "logo": "https://www.digitolla.com/logo.png",
          "tagline": "Event hoo ya Social Media, sab set hai!",
          "description": "Digitolla is a creative digital agency offering premium event coverage, social media management, content creation, brand promotion, video editing, and web development services.",
          "email": "admin@digitolla.com",
          "sameAs": [
            "https://www.instagram.com/digitolla",
            "https://www.linkedin.com/company/digitolla",
            "https://www.facebook.com/digitolla",
            "https://www.youtube.com/@digitolla"
          ],
          "founder": {
            "@type": "Person",
            "name": "Sahil Mohan",
            "jobTitle": "Founder & CEO"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Remote",
            "addressRegion": "India",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "admin@digitolla.com",
            "url": "https://www.digitolla.com/contact"
          }
        }` }} />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Welcome to Digitolla</h1>
        <p>Event hoo ya Social Media, Digitolla py sab set hai!</p>
      </main>
    </>
  );
}
