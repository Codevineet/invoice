import React from 'react';
import './InvoiceCard.css';

const InvoiceCard = ({ invoice }) => {
  const currentDate = new Date();
  const dueDate = new Date(invoice.due_date);
  const isOverdue = dueDate < currentDate;
  const isPaid = !isOverdue;

  return (
    <div className={`invoice-card ${isOverdue ? 'overdue' : ''}`}>
      <div className="invoice-card-content">
        <h3 className="invoice-title">Invoice #{invoice.id}</h3>
        <p><strong>Name:</strong> {invoice.name}</p>
        <p><strong>Email:</strong> {invoice.email}</p>
        <p><strong>Item Purchased:</strong> {invoice.item_purchased}</p>
        <p><strong>Location:</strong> {invoice.location}</p>
        <p><strong>Purchase Date:</strong> {invoice.purchase_date}</p>
        <p><strong>Last Date:</strong> {dueDate.toLocaleDateString()}</p>
        <p><strong>Seller:</strong> {invoice.seller.name} ({invoice.seller.location})</p>
        <p><strong>Amount:</strong> Rs {invoice.amount.toFixed(2)} /-</p>
        <p className={`status ${isOverdue ? 'red' : 'green'}`}>
          {isOverdue ? 'Overdue' : 'Paid'}
        </p>
      </div>
    </div>
  );
};

export default InvoiceCard;
