"use client";

import Head from 'next/head';

interface PageHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  structuredData?: object | object[];
}

export function PageHead({
  title,
  description,
  keywords = 'structured finance, financial advisory, project financing, capital markets, mergers acquisitions, Mumbai, India',
  canonical,
  structuredData,
}: PageHeadProps) {
  const siteUrl = 'https://binarycapital.manus.space';
  const fullTitle = `${title} | Binary Capital`;
  const canonicalUrl = canonical || siteUrl;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((schema, index) => (
            <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }} />
          ))
        ) : (
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }} />
        )
      )}
    </Head>
  );
}
