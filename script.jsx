class Action extends React.Component {
    render() {
        var retweet = this.props.retweets;
        var favourites = this.props.favourites

        return(
            <div class="row">
                <div class="col-2">Retweets : {retweet} </div>
                <div class="col-2">Hearts: {favourites} </div>
            </div>

        )
    }
}

class Profile extends React.Component {
    render() {
        var url = this.props.entities.url;
        var media = this.props.entities.media;
        return(
            <div>
            {url}
            </div>

        )
    }
}


class Entities extends React.Component {
    render() {
        var url = this.props.entities.url;
        var media = this.props.entities.media;
        return(
            <div>
            {url}
            </div>

        )
    }
}

class Content extends React.Component {
    render() {
        var tweet = this.props.tweet;

        return(
            <div>
            {tweet.text}
            <Entities entities={tweet.entities} />
            </div>

        )
    }
}

class User extends React.Component {
    render() {
        var user = this.props.user;
        var date = this.props.created;

        return(
            <div>
            <img src = {user.profile_image_url_https} />
            <p><strong>{user.name}</strong> @{user.screen_name} {date}</p>
            </div>

        )
    }
}

class Tweets extends React.Component {
    render() {
        var tweets = this.props.tweets.map(tweet => {
            return (
                <div>
                    <User user={tweet.user} created={tweet.created_at} />
                    <Content tweet={tweet} />
                    <Action retweets={tweet.retweet_count} favourites={tweet.favorite_count} />
                </div>
            )
        })
        return (
            <div>
                {tweets}
            </div>
        )
    }
}


ReactDOM.render(
    <div>
      <Tweets tweets={tweets} />
    </div>,

    document.getElementById('root')
);