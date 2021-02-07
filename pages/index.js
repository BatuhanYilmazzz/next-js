import Head from 'next/head';
import { StyledContainer } from '../styles';

export default function Home() {
    return (
        <StyledContainer>
            <Head>
                <title>Batuhan Yılmaz | Frontend Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>
        </StyledContainer>
    );
}
