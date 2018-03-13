import React from 'react'
import Header from './Header'
import Nav from './Nav'
import UsersListArticle from './UsersListArticle'
import Footer from './Footer' 

const HomePage = (props) => {

  return (
    <div id="content">
      <Header/>
      <Nav/> 
      <UsersListArticle
        users={props.users}
        // createUser={props.createUser}
        // deleteUser={props.deleteUser}
        // handleUserChange={props.handleUserChange}
        // updateUser={props.updateUser}
        // createGallery={props.createGallery}
        // handleGalleryChange={props.handleGalleryChange}
        // updateGallery={props.updateGallery}
        />
      <Footer/>
    </div>
  )
}

export default HomePage