import './Post.scss';
import React, {PureComponent} from 'react';

export default class Post extends PureComponent {
    render() {
        const {post} = this.props;
        return (
            <div className="Post container">
                <h1>{post.title}</h1>
                <p className={"info-post"}>author: <span>{post.author.login}</span></p>
                <img src={post.prevImg} alt={post.title} className={"main-image"}/>
                {post.body.map((parag, index) => {
                    return <p className={"post-paragraph col-sm-10"}  key={index}>{parag}</p>
                })}
            </div>
        );
    }
}
