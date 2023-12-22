import footer from '../../assets/home1.png'
const Footer = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${footer})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="pt-16 bg-[#C6EBFE]/50">
            <footer className="footer footer-center p-10  taskCntainer text-black font-bold">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Features</a>
                    {/* <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://web.facebook.com/'>
                            <span className='text-3xl'><i className='bx bxl-facebook-circle'></i></span>
                        </a>
                        <a href='https://www.instagram.com/'> <span className='text-3xl'><i className='bx bxl-instagram-alt' ></i></span></a>
                        <a href='https://www.linkedin.com/'> <span className='text-3xl'><i className='bx bxl-linkedin-square' ></i></span></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by TSM</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;