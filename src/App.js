import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import friends from "./friends.json";
import Header from "./components/Header";


function shuffle(images) {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }
  return images;
}

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore : 0,
    statusMessage: "Click an image to begin!",
    ids : []
  };
  
  handleClick = id => {
    let ids = this.state.ids;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if(ids.indexOf(id) === -1){
      ids.push(id);
      this.setState({ 
        score: this.state.score + 1,
        statusMessage: "Correct!" 

      });
      this.makeShuffle();

      if(score + 1 >= topScore){
        this.setState({ topScore: this.state.score + 1 });
      }
    } else{
      this.setState({ score: 0 });
      this.setState({ ids: [] });
      this.setState({ statusMessage: "Incorrect!"});
      this.makeShuffle();
    }
    
  };

  makeShuffle = () => {
    this.setState({ friends: shuffle(friends) });
  };
  
  render() {
    return (
      <div>
        <Header 
          statusMessage={this.state.statusMessage}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              
              id={friend.id}
              key={friend.id}
              
              image={friend.image}
              handleClick={this.handleClick}
            />
          ))}
          
        </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
