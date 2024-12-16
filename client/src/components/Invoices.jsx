import React, { useEffect, useState } from "react";
import { triggerZapier } from "../api/api";
import Footer from "./Footer";
import InvoiceCard from './InvoiceCard';
import Header from "./Header";
import "./Invoices.css";

const Invoices = () => {
    const [user, setUser] = useState({});
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/invoices", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.user);
                setInvoices(data.invoices);
            })
            .catch((err) => console.error("Error fetching invoices:", err));
    }, []);

    const handleReminder = async () => {
        console.log("Button presseed");
      await  triggerZapier();
    }
 

    const overdueInvoicesCount = invoices.filter(invoice => new Date(invoice.due_date) < new Date()).length;
    const paidInvoicesCount = invoices.filter(invoice => new Date(invoice.due_date) >= new Date()).length;

    return (
        <div className="invoices-container">
            <Header user={user} />
            <div className="welcome-section">
                {user && <span className="welcome-message">Welcome back, {user.displayName}</span>}
            </div>

            {/* Invoice Analysis Section */}
            <div className="invoice-analysis-section">
                <h2 className="invoice-analysis-title">Invoice Analysis</h2>
                <div className="invoice-analysis-content">
                    <p>Total Invoices: {invoices.length}</p>
                    <p>Overdue Invoices: {overdueInvoicesCount}</p>
                    <p>Paid Invoices: {paidInvoicesCount}</p>
                </div>
            </div>

            <div className="invoices-section">
                <h2 className="invoices-title">Your Invoices Details</h2>
                <div className="reminder-button-container">
                    <button className="reminder-button" onClick={handleReminder}>
                        Send Reminder via Zapier
                    </button>
                </div>
                <div className="invoices-grid">
                    {invoices.length > 0 ? (
                        invoices.map(invoice => (
                            <InvoiceCard key={invoice.id} invoice={invoice} />
                        ))
                    ) : (
                        <p>No overdue invoices!</p>
                    )}
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Invoices;
