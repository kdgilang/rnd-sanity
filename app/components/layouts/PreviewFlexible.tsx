'use client';

import Link from "next/link";
import { usePreview } from "@sanity/lib/preview";
import { PreviewSuspense } from "@components/PreviewSuspense";
import Section from "@components/layouts/Section";
import { queryFlexibleBySlug } from "@services/getFlexibleBySlugService";
import Loading from '@components/Loading';


export default function PreviewFlexible({ params }: { params?: { slug: string }  }) {
  const data = usePreview(null, queryFlexibleBySlug, params);

  return (
    <>
      <PreviewSuspense fallback={<Loading />}>
        <Section sections={data?.sections} />
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