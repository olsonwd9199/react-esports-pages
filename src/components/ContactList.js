import React, { Component } from 'react'
const $ = require("jquery");
class ContactList extends Component {
    constructor (){
        super();
        this.state = {
            isLoaded:false,
            contacts:[]
        }
        this.getContacts();
    }
    
   
     getContacts()
     {
         $.get("http://localhost:3001/contacts", (resp)=>{
             console.log(resp);
           
            this.setState({contacts:resp, isLoaded:true})
         })
     }
     render() {
         if (!this.state.isLoaded)
         {
             return (<div>loading...</div>);
         }
        return (
           
            <div>
                <h1>Contacts: </h1>
               <table border='1'><tr><th>First</th><th>Last</th><th>Email</th><th>Phone</th></tr>
                {this.state.contacts.map((row)=>(
                    <tr><td>{row.first_name}</td>  <td>{row.last_name}</td><td>{row.email}</td><td>{row.phone}</td>     </tr>
                        
            
                ))}                
                </table>
                </div>
               
                )}
                
}

export default ContactList