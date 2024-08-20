import React, { useEffect } from 'react';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import logoBlack from '../assets/images/logo-black.png';
import logoWhite from '../assets/images/logo.png';

function Testamonials() {

    useEffect(() => {
        // Initialize WOW.js
        new WOW().init();

        // jQuery Document Ready
        $(document).ready(function () {
            $('#video-icon').on('click', function (e) {
                e.preventDefault();
                $('.video-popup').css('display', 'flex');
                $('.iframe-src').slideDown();
            });

            $('.video-popup').on('click', function (e) {
                var $target = e.target.nodeName;
                var video_src = $(this).find('iframe').attr('src');
                if ($target !== 'IFRAME') {
                    $('.video-popup').fadeOut();
                    $('.iframe-src').slideUp();
                    $('.video-popup iframe').attr('src', " ");
                    $('.video-popup iframe').attr('src', video_src);
                }
            });

            // Initialize bxSlider
            $('.slider').bxSlider({
                pager: false
            });
        });

        // Handle Navbar Scroll Event
        const handleScroll = () => {
            const bodyScroll = window.scrollY;
            const navbar = document.querySelector(".navbar");
            const logo = document.querySelector('.navbar-logo img');

            if (bodyScroll > 50) {
                logo.src = logoBlack;
                navbar.classList.add("nav-scroll");
            } else {
                logo.src = logoWhite;
                navbar.classList.remove("nav-scroll");
            }
        };

        // Attach scroll event
        window.addEventListener("scroll", handleScroll);

        // Handle on load event
        handleScroll();

        // ScrollIt plugin initialization
        $.scrollIt({
            easing: 'swing',
            scrollTime: 900,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -63
        });

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <section className="testimonial section-padding" data-scroll-index='4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center white">
                                <h3>Testimonials</h3>
                                <span className="line"></span>
                                <p className="white">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>

                            <div className="section-content">
                                <div className="row">
                                    <div className="offset-md-2 col-md-8 col-sm-12">
                                        <div className="slider">
                                            <div className="slider-item">
                                                <div className="test-img">
                                                    <img src={user1} alt="John Michal" width="157" height="157" />
                                                </div>
                                                <div className="test-text">
                                                    <span className="title">
                                                        <span>John Michal</span> Digital Designer
                                                    </span>
                                                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat.
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="test-img">
                                                    <img src={user2} alt="Steve Smith" width="157" height="157" />
                                                </div>
                                                <div className="test-text">
                                                    <span className="title">
                                                        <span>Steve Smith</span> App User
                                                    </span>
                                                    Euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="test-img">
                                                    <img src={user3} alt="Gordon Shaw" width="157" height="157" />
                                                </div>
                                                <div className="test-text">
                                                    <span className="title">
                                                        <span>Gordon Shaw</span> Blogger
                                                    </span>
                                                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testamonials;
