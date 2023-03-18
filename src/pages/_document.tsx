import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { resetServerContext } from 'react-beautiful-dnd';

type Props = {};

class MyDocument extends Document<Props> {

    static async loadGetInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        resetServerContext();
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}

export default MyDocument;