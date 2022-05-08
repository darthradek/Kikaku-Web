import React from "react";
import css from "./PageBody.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";

interface IProps {
  //   pageMetadata?: Page;
  children: any;
  pageAttribute?: any;
}

function PageBody(props: IProps) {
  // MARK: Props
  const { children, pageAttribute } = props;

  //   const pageMetadata = new Page({
  //     src:
  //       (pageAttribute
  //         ? props.pageMetadata?.src + pageAttribute
  //         : props.pageMetadata?.src) ?? "/",
  //     name: props.pageMetadata?.name ?? "Kikaku",
  //     description: props.pageMetadata?.description ?? "Kikaku",
  //     metaTitle: props.pageMetadata?.metaTitle ?? "Kikaku",
  //     metaDescription: props.pageMetadata?.metaDescription ?? "Kikaku",
  //     metaKeyword: props.pageMetadata?.metaKeyword ?? "Kikaku",
  //     canonicalPath: props.pageMetadata?.canonicalPath ?? "/",
  //   });

  //   // MARK: Constants & Variables
  //   const router = useRouter();

  //MARK: Render
  return (
    <>
      {/* <Head>
        <title>
          {pageAttribute
            ? pageMetadata.metaTitle + pageAttribute + " | HeliPPE"
            : pageMetadata.metaTitle}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          key="description"
          content={pageMetadata.metaDescription}
        />
        <meta name="title" key="title" content={pageMetadata.metaTitle} />
        <meta name="keywords" content={pageMetadata.metaKeyword}></meta>
        <meta
          property="og:title"
          key="og:title"
          content={pageMetadata?.metaTitle}
        />
        <meta property="og:locale" key="og:locale" content="en_EU" />
        <meta
          property="og:url"
          key="og:url"
          content={`${process.env.NEXT_PUBLIC_API_URL}${router.asPath}`}
        />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={pageMetadata.metaDescription}
        />
        <link rel="canonical" href={pageMetadata.canonicalPath} />
      </Head> */}
      <div>{children}</div>
    </>
  );
}

export default PageBody;
