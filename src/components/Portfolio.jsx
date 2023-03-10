import React from "react";

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href={require("../assets/img/portfolio/fullsize/1.jpg")} title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/1.jpg')} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Small company Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/2.jpg')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Ecommerce Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/3.jpg')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Dashboard Visualizer</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/4.jpg')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Mobile Game"</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/5.jpg')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Social Media Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/6.jpg')}  alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Spotify Clone</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;
