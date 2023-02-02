
import { Component } from "react";


class MainComponent extends Component{
    state = {
        Customers: 5,
        amount: "$50",
        data : [
            {
                id:1 ,
                photo : 'https://picsum.photos/50' ,
                name: 'Scott' , 
                phone: '123-456', 
                address: {city : 'LosAngeles'}
            },
            {id:2 ,photo : 'https://picsum.photos/50' ,name: 'Kehinde' , phone: '780-000', address: {city : 'Lagos'}},
            {id:3 ,photo : 'https://picsum.photos/50' ,name: 'Yemi' , phone: '245-456', address: {city : 'London'}},
            {id:4 ,photo : 'https://picsum.photos/50' ,name: 'Buhari' , phone: '', address: {city : 'Kumasi'}},
            {id:5 ,photo : 'https://picsum.photos/50' ,name: 'Ghost' , phone: '', address: {city : 'Ontario'}}
        ],
      }

  render(){
    console.log('MainComponent Rendered')

    return (

        <>
        <h1>Customers : {this.state.Customers}</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map( (cust) => {
                    return (
                    <tr>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt="customer-image" />
                        </td>
                        <td>{cust.name}</td>
                        {this.renderPhones(cust)}                        
                        <td>{cust.address.city}</td>
                    </tr>

                    )
                })}
            </tbody>

        </table>
        </>
      
    )
  }

  renderPhones(cust){
    return (
        cust.phone ? <td>{cust.phone}</td> : <td>No Phone</td>
    )

  }
}


export default MainComponent;
