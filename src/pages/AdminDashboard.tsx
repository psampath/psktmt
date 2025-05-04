
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Package, FileText, Users, Settings, LogOut, Edit, 
  ChevronDown, Search, Bell, User, Menu, X, Image, Plus, ChevronRight,
  Save
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
import { PriceItem, getPrices, updatePrice, formatPrice, parsePrice } from '@/services/priceService';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [priceListData, setPriceListData] = useState<PriceItem[]>([]);
  const [editedPrices, setEditedPrices] = useState<{[key: number]: string}>({});
  const [errors, setErrors] = useState<{[key: number]: string}>({});

  // Check for authentication and load price data
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('admin_authenticated');
    if (!isLoggedIn) {
      navigate('/admin');
      return;
    }
    
    // Load price data
    setPriceListData(getPrices());
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    toast.success('Logged out successfully');
    navigate('/admin');
  };

  const handlePriceChange = (id: number, value: string) => {
    setEditedPrices(prev => ({ ...prev, [id]: value }));
    
    // Validate price (clear error if valid)
    if (value && !isNaN(parseFloat(value.replace(/[^0-9.]/g, ''))) && parseFloat(value.replace(/[^0-9.]/g, '')) > 0) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSavePrice = (id: number) => {
    const editedValue = editedPrices[id];
    
    // Validate price
    if (!editedValue || isNaN(parseFloat(editedValue.replace(/[^0-9.]/g, ''))) || parseFloat(editedValue.replace(/[^0-9.]/g, '')) <= 0) {
      setErrors(prev => ({ 
        ...prev, 
        [id]: "Please enter a valid price (must be a positive number)" 
      }));
      return;
    }
    
    // Format the price
    const numericPrice = parseFloat(editedValue.replace(/[^0-9.]/g, ''));
    const formattedPrice = formatPrice(numericPrice);
    
    // Update price in service
    const success = updatePrice(id, formattedPrice);
    
    if (success) {
      // Update local state with the latest data
      setPriceListData(getPrices());
      
      // Clear edited state for this item
      setEditedPrices(prev => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
      
      // Show success message
      toast.success(`Price updated successfully for ${priceListData.find(item => item.id === id)?.size}`);
    } else {
      toast.error("Failed to update price. Please try again.");
    }
  };

  const handlePriceKeyPress = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter') {
      handleSavePrice(id);
    }
  };

  const filteredPriceData = priceListData.filter(item => 
    item.size.toLowerCase().includes(searchQuery.toLowerCase())
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
              to="/products"
              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-md"
            >
              <Package size={20} />
              <span>Price List</span>
            </Link>
            <div className="flex items-center space-x-3 px-4 py-3 text-neutral-400 rounded-md">
              <FileText size={20} />
              <span>Content</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-neutral-400 rounded-md">
              <Users size={20} />
              <span>Team</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-neutral-400 rounded-md">
              <Settings size={20} />
              <span>Settings</span>
            </div>
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
              <h1 className="text-xl font-bold">Price Management</h1>
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

              <Link to="/products">
                <Button variant="outline" className="border-psktmt-500 text-psktmt-500">
                  View Price List
                </Button>
              </Link>

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
          {/* Price Management Section */}
          <div className="bg-white rounded-lg shadow-card mb-8">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-psktmt-500">Price List Management</h2>
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
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      TMT BAR SIZE
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      PRICE
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {filteredPriceData.length > 0 ? (
                    filteredPriceData.map((item) => (
                      <tr key={item.id} className="hover:bg-neutral-50">
                        <td className="py-4 px-6 whitespace-nowrap font-medium">
                          {item.size}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                              <Input 
                                type="text" 
                                value={editedPrices[item.id] !== undefined ? editedPrices[item.id] : item.price.replace('₹', '').replace('/-', '')} 
                                onChange={(e) => handlePriceChange(item.id, e.target.value)}
                                onKeyPress={(e) => handlePriceKeyPress(e, item.id)}
                                className={`w-32 ${errors[item.id] ? 'border-red-500' : ''}`}
                                aria-label={`Edit price for ${item.size}`}
                              />
                            </div>
                            {errors[item.id] && (
                              <p className="text-red-500 text-xs mt-1">{errors[item.id]}</p>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <Button 
                            className="bg-psktmt-500 hover:bg-psktmt-600 text-white"
                            onClick={() => handleSavePrice(item.id)}
                            disabled={editedPrices[item.id] === undefined}
                            size="sm"
                          >
                            <Save size={16} className="mr-1" />
                            Save
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-neutral-500">
                        No items found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t">
              <p className="text-sm text-neutral-500">
                Note: All prices are displayed in Indian Rupees (₹) and are subject to change. Last updated on April 23, 2025.
              </p>
            </div>
          </div>

          {/* Information Box */}
          <div className="bg-[#f2f7fc] p-6 rounded-lg border border-[#d1e2f2]">
            <h3 className="text-xl font-bold" style={{ color: "#003366" }}>Price Management Guidelines</h3>
            <ul className="space-y-2 text-neutral-700 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Enter prices in INR format (e.g., "384" or "384.50")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Prices will be automatically formatted to include the ₹ symbol</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Changes will be reflected immediately on the public Price List page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>All price updates are backed up automatically</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
