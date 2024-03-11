import Head from "next/head";
import React, {ReactNode} from "react";
import styles from "./layout.module.scss";
import utilsStyles from '../src/styles/utils.module.scss'

const name = 'shin Code'
export const siteTitle = 'Next.js blog'

type Props = {
    children: ReactNode
}
const Layout: React.FC<Props> = ({children}) => {
    return (<div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header>
            <img src="/images/profile.png" alt="profile" className={utilsStyles.borderCircle}/>
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
        </header>
        <main>{children}</main>
    </div>)
}

export default Layout