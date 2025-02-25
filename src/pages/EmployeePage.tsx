
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const EmployeePage = () => {
  const { employeeId } = useParams();

  const employeeData = {
    demographics: {
      ethnicity: "Hispanic",
      gender: "Male",
      age: 35,
      position: "Marketing Manager",
      tenure: "19 months",
      pay: "$125,000",
      standardizedPay: 72,
    },
    volumeData: {
      total: "12000 words",
      sales: "4000",
      internal: "8000",
    },
    complaints: [
      {
        isComplaint: true,
        type: "positive hit 1",
        content: "I sent alisa the email and she never responded its so annoying",
        recipient: "Becky",
      },
      {
        isComplaint: true,
        type: "positive hit 2",
        content: "yes, she never responds and she isn't reliable",
        recipient: "Robert",
      },
      {
        isComplaint: true,
        type: "positive hit 3",
        content: "I work so much and HR never gets their shit together",
        recipient: "Sara",
      },
      {
        isComplaint: false,
        type: "false positive",
        content: "she is amazing, I can't believe she works so much",
        recipient: "Andrew",
      },
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
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-semibold text-slate-800 capitalize">
              {employeeId}
            </h1>
          </div>

          {/* Demographics */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Demographic Data
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(employeeData.demographics).map(([key, value]) => (
                <div key={key} className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-slate-800 font-medium mt-1">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Volume Data */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Volume Data
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(employeeData.volumeData).map(([key, value]) => (
                <div key={key} className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-slate-800 font-medium mt-1">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Complaints */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Complaints
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Content
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Recipient
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.complaints.map((complaint, index) => (
                    <tr
                      key={index}
                      className="border-t border-slate-200 hover:bg-slate-50"
                    >
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {complaint.type}
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        <Link
                          to={`/conversation/${index + 1}`}
                          className="text-accent hover:text-accent/80"
                        >
                          {complaint.content}
                        </Link>
                      </td>
                      <td className="px-4 py-2 text-sm text-slate-800">
                        {complaint.recipient}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            complaint.isComplaint
                              ? "bg-red-100 text-red-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {complaint.isComplaint ? "Complaint" : "Non-Complaint"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default EmployeePage;
