'use client';

import Link from "next/link";
import { usePreview } from "@sanity/lib/preview";
import { PreviewSuspense } from "src/app/components/PreviewSuspense";
import Loading from 'src/app/components/Loading';
import Banner from "../sections/Banner";
import PortableBlock from "../PortableBlock";
import { queryArticleBySlug } from "@services/getArticleBySlugService";
import { aligns } from '@sanity/schemas/variables/aligns';


export default function PreviewArticle({ params }: { params?: { slug: string }  }) {
  const res = usePreview(null, queryArticleBySlug, params);

  const bannerData = {
    title: res?.title,
    description: res?._createdAt?.toStringDate(),
    image: res?.image,
    align: aligns[0].value
  }

  return (
    <>
      <PreviewSuspense fallback={<Loading />}>
        <Banner data={bannerData} />
        <div className="container blog-details-text">
            <div className="alert alert-secondary my-5" role="alert">
            { res.description }
            </div>
            <div className="my-5">
            <PortableBlock value={res.body} />
            </div>
        </div>
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