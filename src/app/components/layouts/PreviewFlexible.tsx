'use client';

import Link from "next/link";
import { usePreview } from "@sanity/lib/preview";
import { PreviewSuspense } from "src/app/components/PreviewSuspense";
import Section from "src/app/components/layouts/Section";
import { queryFlexibleBySlug } from "@services/getFlexibleBySlugService";
import Loading from 'src/app/components/Loading';


export default function PreviewFlexible({ params }: { params?: { slug: string }  }) {
  const data = usePreview(null, queryFlexibleBySlug, params);

  return (
    <>
      <PreviewSuspense fallback={<Loading />}>
        <Section sections={data?.sections} />
        <Link
          className="fixed-top w-100 text-center bg-gray text-primary"
          href="/api/exit-preview"
        >
          Exit Preview
        </Link>
      </PreviewSuspense>
    </>
  );
}