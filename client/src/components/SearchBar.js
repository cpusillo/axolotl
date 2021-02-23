import React, { Component } from 'react'
import { Button, InputGroup, FormControl} from 'react-bootstrap'
import { FaSearchLocation } from 'react-icons/fa'

function SearchBar(){
return(
    <InputGroup className="mb-3">
    <FormControl className="wrapper"
    placeholder="Tacos"
    />
    <InputGroup.Append>
    <Button 
        variant="secondary"
        //onClick={this.handleButtonClick}
    ><FaSearchLocation />
    </Button>
    </InputGroup.Append>
    </InputGroup>
)
}

export default SearchBar