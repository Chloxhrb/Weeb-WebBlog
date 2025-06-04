import { Link } from "react-router-dom";



function Footer() {
    return (
        <section className="Footer">
            <div className="Footer_top">
                <div className="Footer-menu">
                    <h1 className="Footer_title">Weeb</h1>
                </div>
                <div className="Footer-menu">
                    <h6 className="title_link">PRODUCT</h6>
                    <Link to={"/"} className="Page_link"> Pricing
                    </Link>
                    <Link to={"/"} className="Page_link"> Overview
                    </Link>
                    <Link to={"/"} className="Page_link"> Browse
                    </Link>
                    <Link to={"/"} className="Page_link"> Accessibility
                    </Link>
                    <Link to={"/"} className="Page_link"> Five
                    </Link>
                </div>
                <div className="Footer-menu">
                    <h6 className="title_link">SOLUTIONS</h6>
                    <Link to={"/"} className="Page_link"> Brainstorming
                    </Link>
                    <Link to={"/"} className="Page_link"> Ideation
                    </Link>
                    <Link to={"/"} className="Page_link"> Wireframing
                    </Link>
                    <Link to={"/"} className="Page_link"> Research
                    </Link>
                </div>
                <div className="Footer-menu">
                    <h6 className="title_link">RESOURCES</h6>
                    <Link to={"/"} className="Page_link"> Help Center
                    </Link>
                    <Link to={"/"} className="Page_link"> Blog
                    </Link>
                    <Link to={"/"} className="Page_link"> Tutorials
                    </Link>
                </div>
                <div className="Footer-menu">
                    <h6 className="title_link">COMPANY</h6>
                    <Link to={"/"} className="Page_link"> About
                    </Link>
                    <Link to={"/"} className="Page_link"> Press
                    </Link>
                    <Link to={"/"} className="Page_link"> Events
                    </Link>
                    <Link to={"/"} className="Page_link"> Careers
                    </Link>
                </div>
            </div>
            <div className="Footer_bottom">
                <p className="copyright">@ 2025 Weeb, Inc. All rights reserved.</p>
                <div className="social_media">
                    <Link to={"/"}>
                    <img src="./src/assets/youtube.png" alt="logo de Youtube" className="social" />
                    </Link>                
                    <Link to={"/"}>
                    <img src="./src/assets/Facebook.png" alt="logo de Facebook" className="social" />
                    </Link>                
                    <Link to={"/"}>
                    <img src="./src/assets/Twitter.png" alt="logo de Twitter " className="social" />
                    </Link>                
                    <Link to={"/"}>
                    <img src="./src/assets/instagram.png" alt="logo de Instagram" className="social" />
                    </Link>                
                    <Link to={"/"}>
                    <img src="./src/assets/Linkdln.png" alt="logo de Linkdln" className="social" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default Footer;