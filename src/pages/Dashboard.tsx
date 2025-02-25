
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const userInfo = {
    name: "John Smith",
    gender: "Male",
    age: 35,
    jobTitle: "Senior Manager",
    pay: "$120,000",
  };

  const conclusions = {
    "Legal Risk": ["David", "Tom", "Jane", "Rachel"],
    "Retention Issues": ["Becky", "Sara", "Andrew"],
    "Untapped Talent": ["Rachel", "Robert", "Randy"],
    "Performance Drags": ["Nancy", "Nina", "Ninja"],
  };

  const reports = {
    "Complaints (Top 20%)": ["Sara", "Jess", "Matt"],
    "Volume (Bottom 5%)": ["Peter", "Tom", "Nina"],
    "Volume Report (Bottom 20%) and Complaints (Bottom 10%)": [
      "Jacky",
      "Jessica",
      "Jared",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Demographics Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Demographics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(userInfo).map(([key, value]) => (
                <div key={key} className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-slate-800 font-medium mt-1">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusions Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Conclusions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(conclusions).map(([category, employees]) => (
                <div
                  key={category}
                  className="p-4 bg-slate-50 rounded-lg transition-all hover:shadow-md"
                >
                  <Link
                    to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-lg font-medium text-accent hover:text-accent/80"
                  >
                    {category}
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {employees.map((employee) => (
                      <Link
                        key={employee}
                        to={`/employee/${employee.toLowerCase()}`}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
                      >
                        {employee}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Reports Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Reports
            </h2>
            <div className="space-y-4">
              {Object.entries(reports).map(([category, employees]) => (
                <div
                  key={category}
                  className="p-4 bg-slate-50 rounded-lg transition-all hover:shadow-md"
                >
                  <h3 className="text-lg font-medium text-slate-800 mb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {employees.map((employee) => (
                      <Link
                        key={employee}
                        to={`/employee/${employee.toLowerCase()}`}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
                      >
                        {employee}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
