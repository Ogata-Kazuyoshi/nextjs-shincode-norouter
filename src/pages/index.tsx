import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles2 from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, {siteTitle} from "../../components/Layout";
import styles from '../../components/layout.module.scss'
import utilsStyles from '../styles/utils.module.scss'
import {getPostsData} from "../../lib/post";

// const inter = Inter({subsets: ["latin"]});

//SSGの場合

export const getStaticProps = async () => {
    const allPostsData =  getPostsData()
    // console.log(allPostsDate)
    return {
        props : {
            allPostsData
        }
    }
}
type Keys = {
    id:string,
    title:string,
    date:string,
    thumbnail:string
}

type Props = {
    allPostsData: Keys[]
}

export default function Home({allPostsData}:Props) {
    return (
        <div >
            <Layout homeFlg={true}>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilsStyles.headingMd}>
                    <p>いつもShinCodeの動画を見てます</p>
                </section>
                <section>
                    <h2>📝エンジニアのブログ</h2>
                    <div className={styles2.grid}>
                        {allPostsData.map(({id,title,date,thumbnail})=>{
                            return (
                                <article key={id}>
                                    <Link href={`/posts/${id}`}>
                                        <img src={thumbnail} alt="" className={styles2.thumbnailImage}/>
                                    </Link>
                                    <Link href={`/posts/${id}`}>
                                        <p className={utilsStyles.boldText}>{title}</p>
                                    </Link>
                                    <br/>
                                    <small className={utilsStyles.lightText}>
                                        {date}
                                    </small>
                                </article>
                            )
                        })}

                    </div>
                </section>
            </Layout>
        </div>
    );
}
