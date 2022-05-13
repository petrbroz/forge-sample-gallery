import * as React from 'react';
import { actions, action } from './card.module.css';

const Card = ({ title, description, screenshotUrl, liveDemoUrl, sourceUrl }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            {screenshotUrl && <img src={screenshotUrl} alt="screenshot" />}
            <div className={actions}>
                {liveDemoUrl && <a href={liveDemoUrl} className={action} target="_blank">Live Demo</a>}
                {sourceUrl && <a href={sourceUrl} className={action} target="_blank">Source Code</a>}
            </div>
        </>
    )
};

export default Card;
