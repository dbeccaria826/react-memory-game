import React, {Component} from 'react';
import Col from '../Components/Col/Col'
import Row from '../Components/Row/Row'
import Wrapper from '../Components/Wrapper/Wrapper'
import Card from '../Components/Zerg/Zerg'
import Nav from '../Components/Nav/Nav'

import zerg from '../zerg.json'




class Game extends Component {
    state = {
        zerg,
        count: 0,
        maxCount: 0,
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
           this.increaseCountHandler()
        } else {
            this.resetCards()
        }
        
        
    }

    increaseCountHandler = () => {
        const newCount = this.state.count + 1;

        this.setState({ count: newCount })

        if(newCount >= this.state.maxCount) {

            this.setState({maxCount:newCount})
        } 
        else if ( newCount === 12) {

            console.log('You win')
        }
        this.shuffleCards()
    }

    resetCards = () => {
        this.setState({
            count: 0,
            maxCount: this.state.maxCount,
            clicked: []
        })
        this.shuffleCards()
    }

    render () {
        console.log(this.state.zerg)
        return (
           <div>
                 <Nav score={this.state.count} currentScore={this.state.maxCount}/>
           
           <Wrapper>
              
               <Row className="row center">
            
               <Col className="col s6 offset-s3">
                   {this.state.zerg.map(props => (
                  <Card
                   key={props.id}
                   id={props.id}
                   image={props.image}
                   click={() => this.clickHandler(props.id)}
                   
                   />
               ))}
                   </Col>
               </Row>
             
             
           </Wrapper>
           </div>
              
          
          
               
            
        )
    }
}

export default Game;