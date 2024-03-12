import {GetStaticProps, GetStaticPropsContext} from 'next';
import Layout from '../../../components/Layout';
import {getAllPostIds, getPostData} from '../../../lib/post';
import React from "react";
import utilStyles from "../../styles/utils.module.scss"
import Head from "next/head";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false, //pathsに含まれていない文字列は404NotFoundを返却する
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const postData = await getPostData(params?.id);

  return {
    props: {
      postData,
    },
  };
};

type Props = {
  postData:{
    id:string,
    blogContentHTML:string,
    title:string,
    date:string,
    thumbnail:string
  }
}

const Post:React.FC<Props> = ({postData}) => {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>{postData.date}</div>
      <div dangerouslySetInnerHTML={{__html:postData.blogContentHTML}}/>
    </article>
  </Layout>;
};
export default Post;
