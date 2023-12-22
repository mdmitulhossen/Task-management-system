
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`} replace />
};

export default ProtectedRoute; 