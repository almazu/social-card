import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom'

class Card extends React.Component {  
    render() {                
        return (
            <div className='card'>
                <User />
                <Post />
                <Stats />
                <Share />
            </div>
        );
    }
}

class User extends React.Component {
    render() {
        var username = "@ handle username"        
        var logoImage = require('./logopt1.jpg')
        return (   
            <div className='user-account'>
                <img src={logoImage} width={60} height={45}/>
                {username}
            </div>
        );
    }
    
}

class Post extends React.Component {
    render() {
        var post = "Post Content"
        var postImage = require('./cube.png')
        return (
            <div className='post-content'>
                {post}
                <img src={postImage} width={580} height={350} alt="Content Img"></img> 
            </div>
        )
    }
}

class Stats extends React.Component {
    render() {
        var stats = "Retweets ... Likes"
        return (
            <div className='stats'>{stats}</div>
        );
    }
}

class Share extends React.Component {
    render() {
        return (
            <div className='share-buttons'>
                <a href="#" className='like-button'>Like</a>
                <a href="#" className='comment-button'>Comment</a>
                <a href="#" className='share-button'>Share</a>
            </div>
        );
    }
}

export default Card;