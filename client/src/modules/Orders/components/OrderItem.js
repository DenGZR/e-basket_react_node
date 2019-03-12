import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import moment from 'moment';

class OrderItem extends Component {
    render() {
        const { item } = this.props;
        const { createdData, createdBy, id } = item;
        console.log('OrderItem',item);
        return (
            <div className="list-item" >
                <span>{id}</span>
                {' '}
                <span>{moment(createdData).format('DD/MM/YYYY HH:MM')}</span>
                {' '}
                {
                    createdBy && (
                        <span> 
                            <span>{createdBy.name}</span>
                            {' '}
                            <span>{createdBy.phone}</span>
                            {' '}
                        </span>
                    )
                }
                <Link to={`/orders/${id}`}>
                    Посмотреть детали
                </Link>
            </div>
        )
    }
}

export default OrderItem;
