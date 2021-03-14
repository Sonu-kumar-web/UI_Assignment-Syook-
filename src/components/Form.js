import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import Image from '../assets/background.jpeg';

class Form extends React.Component{
    render(){
        return (<div className="image">
                <div className="form">
                    <form >
                    <div style={{marginBottom:"2%"}}>
                        <TextField  label="Title" variant="outlined" className="title"/>
                    </div>
                    <div style={{height:"11vh"}}>
                        <TextField  label="Description" variant="outlined" className="description" />
                    </div>
                    <Button variant="contained" color="primary" className="btn">
                        Submit
                    </Button>
                    </form>
                </div>
        </div>)
    }
}

export default Form;