import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Card from './Card';

// import Image from '../assets/background.jpeg';

class Form extends React.Component{

    state = {title:"", desc:"", data:[], edit:false, editIndex: 0};

    onSubmitForm = (e)=>{
        e.preventDefault();
        if(!this.state.edit){
            if(this.state.title.length!==0 && this.state.desc.length!==0 ){
                let formData = {
                    title: this.state.title,
                    desc: this.state.desc,
                }
                this.setState({data: [...this.state.data, formData], title:"", desc:"", edit:false});
            }
        }else{
            let arr = [];
            this.state.data.map((val, index)=>{
            if(this.state.editIndex !== index){
                arr.push(val);
            }else{
                let formData = {
                    title: this.state.title,
                    desc: this.state.desc,
                }
                arr.push(formData);
            }
        })
        this.setState({data: arr, title:"", desc:"", edit:false});
        }
    }

    // To delete an item for list
    onDelete = (ind)=>{
        let arr = [];
        this.state.data.map((val, index)=>{
            if(ind !== index){
                arr.push(val);
            }
        })
        this.setState({data: arr});
    }

    // To Edit
    onEdit = (ind)=>{
        this.setState({edit:true, editIndex: ind})
        let arr = [];
        this.state.data.map((val, index)=>{
            if(ind !== index){
                arr.push(val);
            }else{
                this.setState({title: val.title, desc: val.desc})
                arr.push(val);
            }
        })
        this.setState({data: arr});
    }

    render(){
        // console.log(this.state.data);
        return (<div>
            <div className="image">
                <div className="form">
                    <form >
                    <div style={{marginBottom:"2%"}}>
                        <TextField  label="Title" variant="outlined" className="title" required onChange={(e)=>this.setState({title: e.target.value})}  value={this.state.title}/>
                    </div>
                    <div style={{height:"11vh"}}>
                        <TextField  label="Description" variant="outlined" className="description" required onChange={(e)=>this.setState({desc: e.target.value})} value={this.state.desc}/>
                    </div>
                    <Button variant="contained" color="primary" className="btn" onClick={e=> this.onSubmitForm(e)} >
                        Submit
                    </Button>
                    </form>
                </div>
        </div>
            <Grid container>
                {this.state.data.map((val, index)=>{
                    return <Card data={val} key={index} index={index} onDelete={this.onDelete} onEdit={this.onEdit}/> 
                })}           
            </Grid>
        </div>)
    }
}

export default Form;