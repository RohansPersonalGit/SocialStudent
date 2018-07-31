import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import './ArticleCard.css'; 

var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=593001f60f42467ea12cf21c71d5f560'
class ArticleBlock extends Component {
    state = {
        articles: "4" 
    }
    
    componentDidMount(){
        var self = this; 
        var fields; 
        fetch(
            url
          ).then(function(response){
            return response.json(); 
          }).then(function(myJson){
              let newsArticles = myJson.articles;
              var size = 3; 
              newsArticles = newsArticles.slice(0,size);
                fields = (<div key= '2'>
                  {newsArticles.map((article, index) =>{   

                return (<li key= {index}><ArticleCard  source= {article.source.name} title= {article.title} url = {article.urlToImage}/></li>)
            })} </div> )
            self.setState({articles: fields});
          })
          console.log(fields); 
          
    }
      
    render(){
       
        return (
            <div key= '1'className="topleft">
                {this.state.articles}
                </div> 
        
    )}
}; 
export default ArticleBlock; 

