import React, {Component} from 'react';
import '../styles/face.css';
class FaceRecognition extends Component {
    render() {
        return (
            <div className='center ma'>
                <div className='center' id='position'>
                <img id={'inputImage'} src ={this.props.imageurl} alt =""  width='500px' height='auto'/>
                <div className='bounding-box' style={{top: this.props.box.topRow, right: this.props.box.rightCol, bottom: this.props.box.bottomRow, left: this.props.box.leftCol}}>

                </div>
                </div>
            </div>
        );
    }
}

export default FaceRecognition;