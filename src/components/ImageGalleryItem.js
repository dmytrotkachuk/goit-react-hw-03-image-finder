import React from 'react'

const ImageGalleryItem = ({webformatURL,tags, modal}) =>{
    
        return(
        <li className="ImageGalleryItem" onClick={modal}>
            <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
        </li>)
    
}

export default ImageGalleryItem;

// class ImageGalleryItem extends React.Component{
//     state ={
//         largeImageURL:''
//     }

//     handleClick = e =>{
//         this.setState({largeImageURL: this.props.largeImageURL })
//         console.log('largeImageURL',this.props.largeImageURL)
//     }

//     render(){
//         const {webformatURL,tags} = this.props
//         return(
//         <li className="ImageGalleryItem" onClick={this.handleClick}>
//             <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
//         </li>)
//     }
// }


// export default ImageGalleryItem;