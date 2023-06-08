'use client';

import Link from "next/link";
import { usePreview } from "@sanity/lib/preview";
import { PreviewSuspense } from "@components/PreviewSuspense";

export default function PreviewPage({ query, params }: { query: string, params?: { slug: string }  }) {
  const data = usePreview(null, query, params);
  return (
    <>
      <PreviewSuspense fallback="Loading...">
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
      </PreviewSuspense>
    </>
  );
}