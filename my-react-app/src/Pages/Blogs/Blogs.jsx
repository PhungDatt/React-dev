import Footer from '../Component/Footer/Footer';
import BlogView from './BlogView';
const Blogs = () => {
    return (
                <>
                <div className="container">
                            <br/>
                            <h3>TRANH DANH MỤC BÀI VIẾT</h3>
                            <hr/>
                            <div >
                        <BlogView />
                            </div>
                            <hr/>   
                        </div>
                        <Footer />
                </>
        

    )
};
export default Blogs ;