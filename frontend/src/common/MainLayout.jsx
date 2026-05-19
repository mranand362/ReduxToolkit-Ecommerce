import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { Provider } from "react-redux"
import { store } from '../redux/store';


const MainLaYOUT = () => {
    return (
        <div>
            <Provider store={store}>
                <Header />

                <Outlet />

                <Footer />
            </Provider>
        </div>
    )
}

export default MainLaYOUT
