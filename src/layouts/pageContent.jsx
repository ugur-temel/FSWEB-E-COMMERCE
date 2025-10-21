import Header from "./header";
import Footer from "./footer";

export default function PageContent ({children}) {
    return(
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>
    )
}
