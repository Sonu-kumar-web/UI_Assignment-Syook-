import React from 'react';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Card extends React.Component{

    onClickDelete = (e)=>{
        e.preventDefault();
        this.props.onDelete(this.props.index)
    }

    onClickEdit = (e)=>{
        e.preventDefault();
        this.props.onEdit(this.props.index)
    }

    render(){
        return (
                    <Grid item xs={4} style={{marginTop:"1%"}} >
                        <Paper>
                        <div className="card">
                            <div className="card-left">
                                <QuestionAnswerIcon/>
                            </div>
                        <div className="card-right">
                        <div>
                            <div style={{marginTop:"3%"}}>
                                <b>{this.props.data.title}</b>
                                <p>{this.props.data.desc}</p>
                            </div>
                            <div className="card-btn">
                            <Button variant="contained" color="primary" onClick={e=>this.onClickEdit(e)} >
                                Edit
                            </Button>
                            <Button variant="contained" color="primary" onClick={e=>this.onClickDelete(e)}>
                                Delete
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
                </Paper>
            </Grid>

                )
    }
}

export default Card;

