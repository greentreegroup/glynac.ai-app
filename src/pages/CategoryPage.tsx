
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { categoryId } = useParams();

  const tableData = {
    rows: [
      {
        label: "Top Hit 1",
        name: "Tom",
        volumeRaw: 88,
        volumeStandardized: 70,
        complaintsRaw: 50,
        complaintsStandardized: 75,
        total: 99,
      },
      {
        label: "Top Hit 2",
        name: "Sara",
        volumeRaw: 60,
        volumeStandardized: 75,
        complaintsRaw: 90,
        complaintsStandardized: 80,
        total: 98,
      },
      {
        label: "Top Hit 3",
        name: "",
        volumeRaw: 0,
        volumeStandardized: 0,
        complaintsRaw: 0,
        complaintsStandardized: 0,
        total: 0,
      },
    ],
  };

  const statistics = {
    volume: {
      populationSize: 250,
      standardDeviation: 69,
      mean: 45,
    },
    complaints: {
      populationSize: 250,
      standardDeviation: 69,
      mean: 45,
    },
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
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-semibold text-slate-800 capitalize">
              {categoryId?.replace(/-/g, " ")}
            </h1>
          </div>

          {/* Data Table */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Rank
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Volume Raw
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Volume Standardized
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Complaints Raw
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Complaints Standardized
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, index) => (
                    <tr
                      key={row.label}
                      className="border-t border-slate-200 hover:bg-slate-50"
                    >
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.label}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.name && (
                          <Link
                            to={`/employee/${row.name.toLowerCase()}`}
                            className="text-accent hover:text-accent/80"
                          >
                            {row.name}
                          </Link>
                        )}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.volumeRaw || "-"}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.volumeStandardized || "-"}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.complaintsRaw || "-"}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.complaintsStandardized || "-"}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {row.total || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Statistics */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Statistics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-3">
                  Volume Statistics
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Population Size</span>
                    <span className="font-medium text-slate-800">
                      {statistics.volume.populationSize}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Standard Deviation</span>
                    <span className="font-medium text-slate-800">
                      {statistics.volume.standardDeviation}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Mean</span>
                    <span className="font-medium text-slate-800">
                      {statistics.volume.mean}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-3">
                  Complaints Statistics
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Population Size</span>
                    <span className="font-medium text-slate-800">
                      {statistics.complaints.populationSize}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Standard Deviation</span>
                    <span className="font-medium text-slate-800">
                      {statistics.complaints.standardDeviation}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Mean</span>
                    <span className="font-medium text-slate-800">
                      {statistics.complaints.mean}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;
