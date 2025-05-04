
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// In a real application, these should be environment variables
// For demo purposes only, we're hardcoding them (NOT recommended for production)
const ADMIN_EMAIL = "admin@psktmt.com";
const ADMIN_PASSWORD = "admin123"; // In production, this would be hashed

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // Check if already authenticated
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('admin_authenticated');
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    
    // Simple authentication check
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Store authentication in session storage (will be lost when browser is closed)
        sessionStorage.setItem('admin_authenticated', 'true');
        toast.success('Login successful!');
        navigate('/admin/dashboard');
      } else {
        setLoginError('Invalid email or password. Please try again.');
        toast.error('Login failed. Invalid credentials.');
      }
      
      setIsLoading(false);
    }, 800); // Slight delay for UX
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-psktmt-500 text-white font-bold text-xl p-2 rounded mr-2">
              PSK
            </div>
            <span className="font-heading font-bold text-2xl">PSKTMT Admin</span>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          
          {loginError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
              {loginError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@psktmt.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-300 text-psktmt-500 focus:ring-psktmt-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                  Remember me
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-psktmt-500 hover:bg-psktmt-600 py-6"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-psktmt-500 hover:underline text-sm">
              Return to Main Website
            </Link>
          </div>

          <div className="mt-8 border-t pt-6">
            <p className="text-center text-sm text-neutral-600">
              This is a secure area. Unauthorized access is prohibited.
            </p>
            
            {/* Only for demo purposes - would be removed in production */}
            <p className="text-center text-xs text-neutral-400 mt-2">
              Demo credentials: admin@psktmt.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
