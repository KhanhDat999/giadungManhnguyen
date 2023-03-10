import Header from "../Header";
import './index.scss'

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="max-w-7xl m-auto">
                {children}
            </div>
        </>
    );
}

export default DefaultLayout;