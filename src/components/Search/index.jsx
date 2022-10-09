import React from 'react'
import { Stack, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searcher = (prop) => {
    const { setInputUser } = prop
    const [valueInput, setValueInput] = React.useState('')

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value
        setValueInput(inputValue)
    }

    const handleSubmit = () => {
        setInputUser(valueInput)
    }
    return (
        <Stack
            direction="row"
            sx={{
                marginTop: '30px',
                width: '80%',
            }}
        >
            <TextField
                id="outlined-basic"
                label="Github User"
                variant="outlined"
                size="small"
                value={valueInput}
                onChange={onSearchValueChange}
                placeholder="Buscar usuario de GitHub"
                sx={{
                    width: '90%',
                }}
            ></TextField>
            <IconButton
                onClick={handleSubmit}
                size="small"
                sx={{
                    left: '-45px',
                }}
            >
                <SearchIcon />
            </IconButton>
        </Stack>
    )
}

export default Searcher
