import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = ({ title, description, localImage, liveDemoUrl, sourceUrl, tags }) => {
    const image = getImage(localImage);
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card h-100">
                <GatsbyImage image={image} alt={description} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <div className="mb-2">
                        {
                            tags && tags.map(tag => (
                                <span key={tag} className="badge rounded-pill bg-warning m-1">{tag}</span>
                            ))
                        }
                    </div>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="btn-group">
                            <a href={sourceUrl} target="_blank" className="btn btn-sm btn-outline-secondary">Source</a>
                            <a href={liveDemoUrl} target="_blank" className="btn btn-sm btn-outline-secondary">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;