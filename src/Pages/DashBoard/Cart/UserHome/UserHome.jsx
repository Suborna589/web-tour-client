import React from 'react';
import useAuth from '../../../../Components/SectionTitle/hooks/useAuth';

const UserHome = () => {
    const {user}=useAuth()
    return (
        <div>
            <h2 className="text-2xl">
                <span>Hello, Welcome</span>
            {
                user?.displayName ? user.displayName : 'Back'
            }

</h2>
        </div>
    );
};

export default UserHome;