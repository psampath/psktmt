
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Package, FileText, Users, Settings, LogOut, Edit, 
  ChevronDown, Search, Bell, User, Menu, X, Image, Plus, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

// Mock product data for the admin panel
const products = [
  {
    id: 'fe-500',
    name: 'PSKTMT Fe 500',
    price: '58000',
    category: 'General',
    lastUpdated: '2 days ago'
  },
  {
    id: 'fe-500d',
    name: 'PSKTMT Fe 500D',
    price: '60500',
    category: 'Earthquake Resistant',
    lastUpdated: '1 day ago'
  },
  {
    id: 'fe-550',
    name: 'PSKTMT Fe 550',
    price: '62000',
    category: 'Premium',
    lastUpdated: '3 days ago'
  },
  {
    id: 'fe-550d',
    name: 'PSKTMT Fe 550D',
    price: '64500',
    category: 'Premium',
    lastUpdated: '5 days ago'
  },
  {
    id: 'fe-600',
    name: 'PSKTMT Fe 600',
    price: '69000',
    category: 'Specialized',
    lastUpdated: '1 week ago'
  },
  {
    id: 'crs-fe-500',
    name: 'PSKTMT CRS Fe 500',
    price: '63000',
    category: 'Corrosion Resistant',
    lastUpdated: '2 weeks ago'
  }
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/admin');
  };

  const handlePriceUpdate = (id: string, newPrice: string) => {
    toast.success(`Price for ${id} updated to ₹${newPrice} per ton`);
  };

  const handleDescriptionEdit = (id: string) => {
    toast.success(`Redirecting to edit page for ${id}`);
  };

  const handleImageUpload = (id: string) => {
    toast.success(`Image upload interface opened for ${id}`);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-neutral-100">
      {/* Sidebar */}
      <aside
        className={`bg-white fixed lg:relative z-40 shadow-lg w-64 lg:translate-x-0 transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="bg-psktmt-500 text-white font-bold text-xl p-2 rounded">
              PSK
            </div>
            <span className="font-heading font-bold">Admin</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-neutral-500 hover:text-neutral-700"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-1">
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 rounded-md bg-neutral-100"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              <Package size={20} />
              <span>Products</span>
            </Link>
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              <FileText size={20} />
              <span>Content</span>
            </Link>
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              <Users size={20} />
              <span>Team</span>
            </Link>
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-neutral-500 hover:text-neutral-700"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>

              <div className="relative">
                <Button variant="ghost" className="rounded-full w-8 h-8 p-0">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-500">Total Products</p>
                  <h3 className="text-2xl font-bold">6</h3>
                </div>
                <div className="bg-psktmt-100 p-3 rounded-full text-psktmt-500">
                  <Package size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-500">Recent Updates</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full text-blue-500">
                  <Edit size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-500">Team Members</p>
                  <h3 className="text-2xl font-bold">5</h3>
                </div>
                <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                  <Users size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-500">Pending Tasks</p>
                  <h3 className="text-2xl font-bold">3</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-full text-red-500">
                  <Bell size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Product Management */}
          <div className="bg-white rounded-lg shadow-card mb-8">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Product Management</h2>
              <div className="flex space-x-2">
                <div className="relative block md:hidden">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-40"
                  />
                </div>
                <Button className="bg-psktmt-500 hover:bg-psktmt-600">
                  <Plus size={18} className="mr-2" /> Add Product
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Price (₹/ton)
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-neutral-50">
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-neutral-500">{product.id}</div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          {product.category}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Input 
                              type="text" 
                              value={product.price} 
                              className="w-24" 
                              onChange={(e) => {/* Would update local state */}}
                              onBlur={(e) => handlePriceUpdate(product.id, e.target.value)} 
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          {product.lastUpdated}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDescriptionEdit(product.id)}
                          >
                            <Edit size={16} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleImageUpload(product.id)}
                          >
                            <Image size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-neutral-500">
                        No products found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t flex items-center justify-between">
              <p className="text-sm text-neutral-500">
                Showing {filteredProducts.length} out of {products.length} products
              </p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-neutral-100">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-card">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <Button variant="ghost" className="text-psktmt-500 hover:text-psktmt-600">
                View All <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-500">
                    <Edit size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Product price updated</p>
                    <p className="text-sm text-neutral-500">PSKTMT Fe 500D price updated to ₹60,500 per ton</p>
                    <p className="text-xs text-neutral-400 mt-1">2 hours ago by Admin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-psktmt-100 p-2 rounded-full text-psktmt-500">
                    <Image size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Product image uploaded</p>
                    <p className="text-sm text-neutral-500">New image added for PSKTMT Fe 550</p>
                    <p className="text-xs text-neutral-400 mt-1">5 hours ago by Admin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full text-amber-500">
                    <FileText size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Product description updated</p>
                    <p className="text-sm text-neutral-500">Description updated for PSKTMT CRS Fe 500</p>
                    <p className="text-xs text-neutral-400 mt-1">Yesterday by Admin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-500">
                    <User size={16} />
                  </div>
                  <div>
                    <p className="font-medium">New team member added</p>
                    <p className="text-sm text-neutral-500">Priya Sharma added as Content Editor</p>
                    <p className="text-xs text-neutral-400 mt-1">2 days ago by Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
