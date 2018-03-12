import React from 'react'
import UserCard from './UserCard'
import styled from 'styled-components' 

const ArticleWrapper = styled.article `
  background: rgb(255,255,160);
`

const FlexWrapper = styled.div `
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 340px;
  max-width: 780px;
`

const CreateUserButton = styled.button `
  margin: 5px 1px 2px 1px;
  padding: 15px;
  width: 99.6%;
  font-size: 18px;
  font-weight: bold;
  display: block;
  text-align: left;
  border: none;
  background: rgb(120,255,255);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
`

const UsersListArticle = (props) => {

  return (
    <ArticleWrapper>

      <FlexWrapper>
      <strong>recent users</strong>

      <CreateUserButton 
        // onClick={props.createUser}
        >
        Add new user
      </CreateUserButton>

      <UserCard />
      {/* {props.users.map((user) => {
        return (
          <UserCard
            user={user}
            galleries={user.galleries}
            {...props}
            key={user._id}
            componentWillMount={props.componentWillMount}
            deleteUser={props.deleteUser}
            handleUserChange={props.handleUserChange}
            updateUser={props.updateUser}
            createGallery={props.createGallery}
            handleGalleryChange={props.handleGalleryChange}
            updateGallery={props.updateGallery}
          />)
        })
      } */}

      </FlexWrapper>

    </ArticleWrapper>
  )
}

export default UsersListArticle