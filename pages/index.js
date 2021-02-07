import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import { Body } from '../styles';

export default function Home() {
    return (
        <Body>
            <Head>
                <title>Batuhan Yılmaz | Frontend Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <Projects />
            <Footer />
        </Body>
    );
}
