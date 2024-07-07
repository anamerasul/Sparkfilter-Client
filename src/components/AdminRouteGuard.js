import { useEffect } from 'react';
import useRole from './useRole';

const AdminRouteGuard = ({ children }) => {
    const [role, isLoading] = useRole();

    useEffect(() => {
        // Check role after loading
        if (!isLoading && role !== 'admin') {
            // Redirect to home if not admin
            window.location.href = '/';
        }
    }, [isLoading, role]);

    if (isLoading) return <div className='h-[70vh] flex flex-col justify-center items-center'>
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <div className="h-24 w-24 border-black rounded-full border-t-8 border-b-8"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-[#E3FF04] border-b-8 animate-spin"></div>
            </div>
        </div>
    </div>

    // Render children if user is admin
    return role === 'admin' ? <>{children}</> : <p className='text-red-500 text-3xl font-bold text-center'>Unauthorized access</p>;
};

export default AdminRouteGuard;
