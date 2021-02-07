import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
MyApp.propTypes = {
    pageProps: PropTypes.shape({}),
    Component: PropTypes.elementType
};
export default MyApp;
