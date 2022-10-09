import React from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Search'
import { getGitHubUser } from './services/users'
import UserCard from './containers/UserCard'

const App = () => {
    const [userState, setUserState] = React.useState('inputUser')
    const [inputUser, setInputUser] = React.useState('octocat')
    const [notFound, setNotFound] = React.useState(false)

    const gettinUser = async (user) => {
        const userResponse = await getGitHubUser(user)

        if (userState === 'octocat') {
            localStorage.setItem('octocat', userResponse)
        }

        if (userResponse.message === 'Not Found') {
            const { octocat } = localStorage
            setInputUser(octocat)
            setNotFound(true)
        } else {
            setUserState(userResponse)
        }
        console.log(userResponse)
    }

    React.useEffect(() => {
        gettinUser(inputUser)
    }, [inputUser])

    return (
        <Container
            sx={{
                background: 'whitesmoke',
                width: '80vw',
                height: '530px',
                borderRadius: '16px',
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Searcher inputUser={inputUser} setInputUser={setInputUser} />
            <UserCard userState={userState} />
        </Container>
    )
}

export default App
