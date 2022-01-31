import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'


export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>
                            30 de janeiro de 2022
                        </time>
                        <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                        <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
                    </a>
                    <a href="#">
                        <time>
                            30 de janeiro de 2022
                        </time>
                        <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                        <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
                    </a>
                    <a href="#">
                        <time>
                            30 de janeiro de 2022
                        </time>
                        <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                        <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication'),
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}