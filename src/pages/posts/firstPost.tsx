import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return <>
        <Head>
            <title>NextJs Blog</title>
        </Head>
        <h1>最初の投稿</h1>
        <Link href="/">
            <h2>ホームへ戻る</h2>
        </Link>
    </>
}