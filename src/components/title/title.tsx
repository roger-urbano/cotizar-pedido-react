import React from 'react';
import './title.scss';


interface TitleProps {
    titleLight: string;
    titleBold?: string;
    indication?: string;
}

const Title: React.FC<TitleProps> = ({ titleLight, titleBold, indication }) => {
    return (
        <div className="title">
            <h2 className="title--default">{titleLight} <strong className="title--default-bold">{titleBold}</strong></h2>
            <p className="title--description">{indication}</p>
        </div>
    )
}

export default Title
