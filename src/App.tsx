import React from 'react';
import { Building2, UserRound, ArrowRight } from 'lucide-react';
import JobForm from './components/JobForm';

function App() {
  const [isEnterpriseMode, setIsEnterpriseMode] = React.useState<boolean | null>(null);

  if (isEnterpriseMode === true) {
    return <JobForm onBack={() => setIsEnterpriseMode(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-indigo-600">JobConnect</span>
          </h1>
          <p className="text-xl text-gray-600">Choose your path to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Enterprise Card */}
          <button
            onClick={() => setIsEnterpriseMode(true)}
            className="group relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-indigo-50"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-6 w-6 text-indigo-600" />
            </div>
            <Building2 className="h-16 w-16 text-indigo-600 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h2>
            <p className="text-gray-600 mb-4">
              Post job opportunities and find the perfect talent for your organization
            </p>
            <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">
              Available Now
            </span>
          </button>

          {/* Developer Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 opacity-75">
            <div className="absolute inset-0 bg-white/50 rounded-2xl backdrop-blur-sm z-10"></div>
            <UserRound className="h-16 w-16 text-gray-400 mb-6 relative z-20" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4 relative z-20">Developer</h2>
            <p className="text-gray-600 mb-4 relative z-20">
              Browse opportunities and connect with top companies worldwide
            </p>
            <span className="inline-block px-4 py-2 bg-gray-300 text-gray-600 rounded-full text-sm relative z-20">
              Coming Soon
            </span>
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-600">
          <p>© 2024 JobConnect. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;