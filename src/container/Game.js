import React, {Component} from 'react';
import Col from '../Components/Col/Col'
import Row from '../Components/Row/Row'
import Aux from '../hoc/aux'
import Card from '../Components/Zerg/Zerg'
import zerg from '../zerg.json'

class Game extends Component {
    state = {
        zerg
    }
    
    render () {
        console.log(this.state.zerg[0])
        return (
            <Aux>
                <Row className="row center">
                    <h1>Game Title</h1>
                <Col className="col s6 offset-s3">
                    {this.state.zerg.map(zerg => (
                   <Card 
                    image={zerg.image}
                    />
                ))}
                    </Col>
                </Row>
              
              
            </Aux>
            
        )
    }
}

export default Game;