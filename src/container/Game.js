import React, {Component} from 'react';
import Col from '../Components/Col/Col'
import Row from '../Components/Row/Row'
import Wrapper from '../Components/Wrapper/Wrapper'
import Card from '../Components/Zerg/Zerg'
import zerg from '../zerg.json'

class Game extends Component {
    state = {
        zerg,
        clicked: []
    }
    //Methods for changing state go here
    shuffleCards = () => {
        const shuffle = (array) => 
            [...Array(array.length)]
            .map((...args) => Math.floor(Math.random() * (args[1] + 1)))
            .reduce( (a, rv, i) => ([a[i], a[rv]] = [a[rv], a[i]]) && a, array);
            
            for (let i=0; i<1; i+=1)
            shuffle(zerg)
    }
    
    clickHandler = (id) => {
        if(this.state.clicked.indexOf(id) === -1) {
           this.setState({clicked: this.state.clicked.concat(id)})
        }
        console.log(this.state.clicked)
        this.shuffleCards(zerg)
    }
    
    render () {
        console.log(this.state.zerg)
        return (
            <Wrapper>
                <Row className="row center">
                    <h1>Game Title</h1>
                <Col className="col s6 offset-s3">
                    {this.state.zerg.map(zerg => (
                   <Card 
                    key={zerg.id}
                    id={zerg.id}
                    image={zerg.image}
                    click={() => this.clickHandler(zerg.id)}
                    
                    />
                ))}
                    </Col>
                </Row>
              
              
            </Wrapper>
            
        )
    }
}

export default Game;