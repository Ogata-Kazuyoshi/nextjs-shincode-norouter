import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles2 from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from '../../components/layout.module.scss'
import utilsStyles from '../styles/utils.module.scss'

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <div >
            <Layout>
                <section className={utilsStyles.headingMd}>
                    <p>いつもShinCodeの動画を見てます</p>
                </section>
                <section>
                    <h2>📝エンジニアのブログ</h2>
                    <div className={styles2.grid}>
                        <article>
                            <Link href='/'>
                                <img src="/images/thumbnail01.jpg" alt="" className={styles2.thumbnailImage}/>
                            </Link>
                            <Link href='/'>
                                <p className={utilsStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</p>
                            </Link>
                            <br/>
                            <small className={utilsStyles.lightText}>
                                Febrary 24, 2023
                            </small>
                        </article>
                        <article>
                            <Link href='/'>
                                <img src="/images/thumbnail02.jpg" alt="" className={styles2.thumbnailImage}/>
                            </Link>
                            <Link href='/'>
                                <p className={utilsStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</p>
                            </Link>
                            <br/>
                            <small className={utilsStyles.lightText}>
                                Febrary 24, 2023
                            </small>
                        </article>
                        <article>
                            <Link href='/'>
                                <img src="/images/thumbnail03.jpg" alt="" className={styles2.thumbnailImage}/>
                            </Link>
                            <Link href='/'>
                                <p className={utilsStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</p>
                            </Link>
                            <br/>
                            <small className={utilsStyles.lightText}>
                                Febrary 24, 2023
                            </small>
                        </article>
                        <article>
                            <Link href='/'>
                                <img src="/images/thumbnail04.jpg" alt="" className={styles2.thumbnailImage}/>
                            </Link>
                            <Link href='/'>
                                <p className={utilsStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</p>
                            </Link>
                            <br/>
                            <small className={utilsStyles.lightText}>
                                Febrary 24, 2023
                            </small>
                        </article>
                    </div>
                </section>
            </Layout>
        </div>
    );
}
