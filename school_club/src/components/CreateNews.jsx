import React, { useState, useEffect } from 'react'

import {postRequest, getRequest} from '../config/axios.config'
import "../css/CreateClub.css";


function CreateNews(){

    const [articleTitle, setArticleTitle] = useState('')
    const [articleDescription, setArticleDescription] = useState('')
    const [all, setAll] = useState(false)

    useEffect(() => {
        async function fetchMyApi() {
            try{
                let response = await getRequest('/post')
                console.log(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchMyApi()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        async function postMyApi() {    
            try{
                let response = await postRequest('/post',{
                    user: {
                        article_title: articleTitle,
                        article_description: articleDescription,
                        all: all
                    }
                })
            }    
            catch(err){
                console.log(err)
            }    
        }
        postMyApi()
    }

    const handleChange = (event) => {
        setArticleTitle(event.target.name.value)
        setArticleDescription(event.target.name.value)
        setAll(event.target.name.value)
        console.log(articleTitle)
    }

    return(
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Article Title:
                        <input type='text' name={articleTitle} value={articleTitle} placeholder='Title' onChange={handleChange}></input>
                    </label>
                    <label>Article Description:
                        <textarea type='text' name={articleDescription} value={articleDescription} placeholder='Description' onChange={handleChange}></textarea>
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </React.Fragment>
    )

}

export default CreateNews;