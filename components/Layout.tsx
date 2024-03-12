import Head from "next/head";
import React, {ReactNode} from "react";
import styles from "./layout.module.scss";
import utilsStyles from '../src/styles/utils.module.scss'
import Link from "next/link";

const name = 'shin Code'
export const siteTitle = 'Next.js blog'

type Props = {
    children: ReactNode,
    homeFlg?:boolean
}
const Layout: React.FC<Props> = (
    {children,
        homeFlg =false}
) => {
    return (<div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header >
            {homeFlg ? (
                <>
                    <img src="/images/profile.png" alt="profile" className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}/>
                    <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <img src="/images/profile.png" alt="profile"
                         className={`${utilsStyles.borderCircle}`}/>
                    <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                </>
            )}
        </header>
        <main>{children}</main>
        {!homeFlg && <Link href={'/'}>ホームへ戻る</Link> }
    </div>)
}

export default Layout