import React, {Component} from 'react';

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

import Loader from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";


import imageApi from './services/imageApi'

import './App.css';

class App extends Component{

  state={
    gallery:[],
    loading:false,
    error: null,
    searchQuery:'',
    page:1,
    largeImageURL:'',
    isModalOpen: false
  }


  componentDidUpdate(prevProps,prevState){
    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery
    // если предыдущая и следующая строка поиска не равны - делаем новый запрос
    if(prevQuery !== nextQuery){
      this.fetchImages()
    }

    const prevArray = prevState.gallery.length
    const nextArray = this.state.gallery.length
    //если после нажатия load more длина нового массива стала больше - ltkftv scrollTo
    if (prevArray !== nextArray){
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    
  }

 

  fetchImages = () =>{
    const {searchQuery,page} = this.state
    this.setState({loading:true})
    
    imageApi.fetchImageWithQuery(searchQuery,page)
    .then(gallery => 
      this.setState(prevState => ({
        gallery:[...prevState.gallery, ...gallery], 
        page: prevState.page+1})))
    .catch((error)=> this.setState({error}))
    .finally(()=> this.setState({loading:false}))
  }

  //получаем новую строку из SearchForm, записываем ее в state, очищаем gallery и 
  //сбрасываем  page после предыдещего запроса
  handleSearchFormSubmit = query =>{
    this.setState({ 
      searchQuery: query, 
      page: 1,
      gallery:[]
    })
  }
  //определяем открытие/закрытие модального и записываем адрес изображения для него в стейт
  toggleModal = (largeImageURL) =>{
    this.setState({
      largeImageURL: largeImageURL,
      isModalOpen:!this.state.isModalOpen
    })
  }


  render(){
    const {gallery,loading, largeImageURL, isModalOpen} = this.state;
    return(
      <div className='App'>
          <Searchbar onSubmit={this.handleSearchFormSubmit}/>
          {gallery.length > 0 && <ImageGallery gallery={gallery} toggleModal={this.toggleModal}/>}
          {loading && <Loader/>}
          {gallery.length > 0 && !loading && <Button onClick={this.fetchImages}/>}
          {isModalOpen && <Modal largeImageURL={largeImageURL} closeModal={this.toggleModal}/>}


      </div>
    )
  }
}


export default App;
