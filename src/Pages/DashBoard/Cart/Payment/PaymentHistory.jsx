import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../Components/SectionTitle/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Components/SectionTitle/hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading='Payment history'></SectionTitle>

            <h2 className="text-3xl">Total Payment:{payments.length}</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
  
    <thead>
      <tr>
        <th>#</th>
        <th>Average Cost</th>
        <th>Transaction Id</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    {
        payments.map((payment,index)=> <tr key={payment._id}>
            <th>{index + 1}</th>
            <td>${payment.average_cost}</td>
            <td>{payment.transactionId}</td>
            <td>{payment.status}</td>
            <td>{payment.date}</td>
          </tr>)
    }
     
   
        
     
    </tbody>
  </table>
</div>







        </div>
    );
};

export default PaymentHistory;