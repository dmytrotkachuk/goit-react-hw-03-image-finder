
import React, {Component} from 'react'

export default class Modal extends Component {

    componentDidMount(){
        // console.log('componentDidMount')
        // console.log('addEventListener')
        window.addEventListener('keydown', this.handleKeydown)
        
    }

    componentWillUnmount(){
        // console.log('componentWillUnmount')
        // console.log('removeEventListener')
        window.removeEventListener('keydown' , this.handleKeydown)
    }

    handleKeydown = e => {
        if (e.code === 'Escape'){
            this.props.closeModal()
        }
    }
    
    render(){

        const {largeImageURL, closeModal} = this.props

        return(
            <div className="Overlay" onClick={closeModal}>
                <div className="Modal">
                    <img src={largeImageURL} alt='' />
                </div>
            </div>
            )
    }
    
}

 