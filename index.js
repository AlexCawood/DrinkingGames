function NextBtn (props){
  return(
    <button className="btn btn-primary" onClick={props.onClick}>Next</button>
  );
}
function BackBtn (props){
  return(
    <button className="btn btn-primary" onClick={props.onClick}>Back</button>
  );
}

function HouseRules(props){
  return(
    <div className="row">
      <div className="col-12">
        <h1>House Rules</h1>
      </div>
      <div className="row">
        <div className="col-5">
        <h5>What is it?</h5>
        <p>Just rules you have to follow,okay?
        <br/>
        <br/>
        They apply to ALL drinking
        <br/>
        <br/>
        games and just life in
        general.
        <br/>
        <br/>
        If you don't, you drink.
        Simple as that.</p>
        </div>
        <div className="col-1">
        </div>
        <div className="col-5">
        <h5>Rules</h5>
        <p>
        -Buffalo: All players must drink with
        their left hands, unless otherwise
        specified by a game rule. If you drink
        with your right hand, you have to down
        your entire drink.
        <br/>
        <br/>
        -Guns: No person’s drink can be closer
        to the edge of the table than the length
        of the person’s middle finger at any
        given time. If found to be nearer, the
        person must down that drink.
        <br/>
        <br/>
        -M.I.N.E.: No person may say the word
        MINE under any circumstance. If you do
        say the word, you must drink. This rule
        applies to life and if said in the absence
        of alcohol, you must do 5 push-ups
        wherever you are.
        <br/>
        <br/>
        -Spillage is Downage: Kinda self
        explanatory
        </p>
        </div>
      </div>
    </div>
  );
}

function Confidence(props){
  return(
    <div className="row">
      <div className="col-12">
        <h1>Confidence</h1>
      </div>
      <div className="row">
        <div className="col-5">
        <h5>What is it?</h5>
        <p>A simple game to start off
        the night. Consumption
        levels depend on your luck
        and how confident you and
        your friends are.

        </p>
        <h5>Number of players</h5>
        <p>As many and as few as
            you like. (You can even
            play alone, but that's a
            bit sad)
        </p>
        <h5>What you need</h5>
          <ul>
            <li>A deck of cards</li>
            <li>One communal cup</li>
          </ul>
        </div>
        <div className="col-1">
        </div>
        <div className="col-5">
        <h5>Instructions</h5>
        <ol>
          <li>The dealer holds the shuffled deck of
              cards and one by one deals the cards</li>
          <li>The first player must pour as much of
          their drink into the cup as they want,
          depending on how “confident” they are.</li>
          <li>The player must then guess whether
          the next card is red or black.</li>
          <li>If the player gets it right they can
          pass the cup onto the next person. If
          they get it wrong, the person must
          down whatever is in the cup and go
          again.</li>
          <li>The cup moves around the circle until
          someone gets the card wrong, adding
          drinks every round.</li>
        </ol>
        </div>
      </div>
    </div>
  );
}
class TableOfContent extends React.Component{
  render(){
    return (
      <div className="col-4">
      <ul>
      <li>Home</li>
      <li>House Rules</li>
      <li>Confidence</li>
      <li>Game 4</li>
      </ul>
    </div>);
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.state={
      games:this.props.games,
      current:'',
      count:0
    };

  }
  handleNextClick(){
    let count = this.state.count;
    let games =this.state.games;
    if( count > games.length){
      this.setState({count:0});
    }
  }
  render(){
    console.log(this.state.count);
    //console.log(this.handleNextClick);
    let comp;
    let count = this.state.count;
    let current = this.state.current;
    let gameArrLength= this.state.games.length;
    if (current === 'houseRules') {
      comp=(<HouseRules/>);
    }else if (current === 'confidence') {
      comp=(<Confidence/>);
    }else{
      comp=(<h3>Home Page</h3>);
    }
    console.log(count);
    console.log(current);
    console.log(gameArrLength);
    //need to figue out why its not minusing from count!
    return (
      <div className="col-8">
        {comp}
        <div className="row">
          <div className="col-6">
            <BackBtn onClick={()=>
              {this.setState({count:this.state.count -1,
              current:this.state.games[this.state.count]});
              if( this.state.count < 0){
                this.setState({count:0});
              }

            }}/>
          </div>
          <div className="col-6">
            <NextBtn onClick={()=>{this.setState({count:this.state.count + 1,
              current:this.state.games[this.state.count]});
              if( this.state.count > this.state.games.length){
                this.setState({count:0});
              }
          }}/>
          </div>
        </div>
      </div>
    );
  }
}
function handleChange(a,b){
  if (a<b && a>=0){
    return 1;
  }
  else {
    return 0;
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={games:['houseRules', 'confidence']};
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <h1>Drinking Games</h1>
          </div>
        </div>
        <div className="row">
          <TableOfContent/>
          <Game games={this.state.games}/>
        </div>
      </div>);
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
