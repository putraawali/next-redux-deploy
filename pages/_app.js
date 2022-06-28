import { wrapper } from "../store";
import "../styles/globals.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
    console.log("Ini muncul di setiap halaman");
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(MyApp);
// export default MyApp;
